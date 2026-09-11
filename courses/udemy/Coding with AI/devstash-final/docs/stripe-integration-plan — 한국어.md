# Stripe Integration Plan

> 원문 [stripe-integration-plan.md](stripe-integration-plan.md)의 한국어 번역본입니다.

> DevStash Pro($8/mo 또는 $72/yr)에 Stripe 구독(subscription) 결제를 추가하기 위한 종합 계획입니다.

---

## Table of Contents

- [Current State Analysis](#current-state-analysis)
- [Stripe Dashboard Setup](#stripe-dashboard-setup)
- [Implementation Order](#implementation-order)
- [Phase 1: Stripe SDK & Utilities](#phase-1-stripe-sdk--utilities)
- [Phase 2: Session & Auth Changes](#phase-2-session--auth-changes)
- [Phase 3: Checkout Flow](#phase-3-checkout-flow)
- [Phase 4: Webhook Handler](#phase-4-webhook-handler)
- [Phase 5: Customer Portal](#phase-5-customer-portal)
- [Phase 6: Feature Gating](#phase-6-feature-gating)
- [Phase 7: UI Components](#phase-7-ui-components)
- [Files Summary](#files-summary)
- [Testing Checklist](#testing-checklist)

---

## Current State Analysis

### What's Already in Place

| 영역 | 상태 | 상세 |
|------|--------|---------|
| **데이터베이스 스키마(schema)** | 준비됨 | User 모델에 `isPro`, `stripeCustomerId`, `stripeSubscriptionId` 필드 존재 |
| **환경 변수(environment variables)** | 준비됨 | env.example에 `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_MONTHLY`, `STRIPE_PRICE_ID_YEARLY` 존재 |
| **NextAuth v5** | 준비됨 | 세션(session)에 `user.id`를 담는 JWT 전략. `isPro` 추가 필요 |
| **세션 타입(types)** | 업데이트 필요 | `next-auth.d.ts`에는 session.user에 `id`만 있음 |
| **레이트 리미팅(rate limiting)** | 준비됨 | Upstash Redis 인프라가 존재하며, 사용량 제한(usage limits)으로 확장 가능 |
| **UI Pro 배지(badges)** | 준비됨 | Sidebar와 NewItemDialog에서 File/Image 타입에 "PRO" 배지 표시 |
| **가격 페이지(pricing page)** | 준비됨 | Free/Pro 비교와 월간/연간 토글이 있는 PricingSection.tsx |

### What Needs to Be Built

| 영역 | 설명 |
|------|-------------|
| **Stripe SDK** | `src/lib/stripe.ts` - SDK 초기화 |
| **Checkout API** | `src/app/api/stripe/checkout/route.ts` - 결제 세션(checkout session) 생성 |
| **웹훅 핸들러(webhook handler)** | `src/app/api/webhooks/stripe/route.ts` - Stripe 이벤트 처리 |
| **고객 포털(customer portal)** | `src/app/api/stripe/portal/route.ts` - 결제 관리 리다이렉트 |
| **사용량 제한(usage limits)** | `src/lib/usage.ts` - item/collection 제한 확인 |
| **기능 게이팅(feature gating)** | `createItem`, `createCollection`, upload route 수정 |
| **세션 isPro** | JWT 콜백(callback), 세션 타입, auth 설정에 `isPro` 추가 |
| **결제 UI(billing UI)** | 설정(settings) 페이지의 결제 섹션, 업그레이드 유도 프롬프트 |

### Key Files to Modify

| 파일 | 변경 사항 |
|------|---------|
| `src/auth.ts` | JWT 콜백에 `isPro` 추가(항상 DB에서 동기화) |
| `src/types/next-auth.d.ts` | Session 및 JWT 타입에 `isPro` 추가 |
| `src/actions/items.ts` | `createItem`에 사용량 제한 확인 추가 |
| `src/actions/collections.ts` | `createCollection`에 사용량 제한 확인 추가 |
| `src/app/api/upload/route.ts` | 파일/이미지 업로드 전 Pro 확인 추가 |
| `src/app/settings/page.tsx` | BillingSettings 섹션 추가 |
| `src/components/homepage/PricingSection.tsx` | Pro 버튼을 checkout에 연결 |

---

## Stripe Dashboard Setup

코드를 작성하기 전에 [Stripe Dashboard](https://dashboard.stripe.com)에서 다음을 설정합니다:

### 1. Create Product

- **Name:** DevStash Pro
- **Description:** Unlimited items, collections, file uploads, and AI features

### 2. Create Two Prices

| 가격 | 금액 | 주기 | 비고 |
|-------|--------|----------|-------|
| Monthly | $8.00 USD | Monthly | Price ID를 `STRIPE_PRICE_ID_MONTHLY`에 복사 |
| Yearly | $72.00 USD | Yearly | Price ID를 `STRIPE_PRICE_ID_YEARLY`에 복사 |

### 3. Configure Customer Portal

**Settings > Billing > Customer Portal**로 이동하여 다음을 활성화합니다:
- 인보이스 내역(Invoice history)
- 구독 취소(Subscription cancellation)
- 구독 플랜 전환(Subscription plan switching) (월간/연간 간)
- 결제 수단 관리(Payment method management)

### 4. Create Webhook Endpoint

**Developers > Webhooks**로 이동하여 다음을 추가합니다:
- **URL:** `https://your-domain.com/api/webhooks/stripe`
- **수신할 이벤트:**
  - `checkout.session.completed`
  - `invoice.paid`
  - `invoice.payment_failed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
- **Signing secret**을 `STRIPE_WEBHOOK_SECRET`에 복사

### 5. Environment Variables

```env
STRIPE_SECRET_KEY="sk_test_..."          # From API keys
STRIPE_PUBLISHABLE_KEY="pk_test_..."     # From API keys
STRIPE_WEBHOOK_SECRET="whsec_..."        # From webhook endpoint
STRIPE_PRICE_ID_MONTHLY="price_..."      # From monthly price
STRIPE_PRICE_ID_YEARLY="price_..."       # From yearly price
```

---

## Implementation Order

```
Phase 1: Stripe SDK & Utilities          (lib/stripe.ts, lib/usage.ts)
Phase 2: Session & Auth Changes           (auth.ts, next-auth.d.ts)
Phase 3: Checkout Flow                    (API route + success page)
Phase 4: Webhook Handler                  (API route for Stripe events)
Phase 5: Customer Portal                  (API route for billing management)
Phase 6: Feature Gating                   (server actions + upload route)
Phase 7: UI Components                    (settings billing, upgrade prompts)
```

---

## Phase 1: Stripe SDK & Utilities

### Create `src/lib/stripe.ts`

Stripe Node SDK를 초기화합니다.

```typescript
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});
```

**Install:** `npm install stripe`

### Create `src/lib/usage.ts`

사용자의 사용량을 무료 티어(free tier) 제한과 비교해 확인하는 유틸리티 함수입니다.

```typescript
import { prisma } from '@/lib/prisma';

export const FREE_TIER_LIMITS = {
  MAX_ITEMS: 50,
  MAX_COLLECTIONS: 3,
} as const;

interface UsageResult {
  itemCount: number;
  collectionCount: number;
  canCreateItem: boolean;
  canCreateCollection: boolean;
}

/**
 * Get user's current usage and whether they can create more resources
 */
export async function getUserUsage(userId: string, isPro: boolean): Promise<UsageResult> {
  const [itemCount, collectionCount] = await Promise.all([
    prisma.item.count({ where: { userId } }),
    prisma.collection.count({ where: { userId } }),
  ]);

  return {
    itemCount,
    collectionCount,
    canCreateItem: isPro || itemCount < FREE_TIER_LIMITS.MAX_ITEMS,
    canCreateCollection: isPro || collectionCount < FREE_TIER_LIMITS.MAX_COLLECTIONS,
  };
}

/**
 * Check if user can create an item (quick check, no full usage fetch)
 */
export async function canCreateItem(userId: string, isPro: boolean): Promise<boolean> {
  if (isPro) return true;
  const count = await prisma.item.count({ where: { userId } });
  return count < FREE_TIER_LIMITS.MAX_ITEMS;
}

/**
 * Check if user can create a collection (quick check)
 */
export async function canCreateCollection(userId: string, isPro: boolean): Promise<boolean> {
  if (isPro) return true;
  const count = await prisma.collection.count({ where: { userId } });
  return count < FREE_TIER_LIMITS.MAX_COLLECTIONS;
}
```

---

## Phase 2: Session & Auth Changes

### Modify `src/types/next-auth.d.ts`

Session 및 JWT 타입에 `isPro`를 추가합니다.

```typescript
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      isPro: boolean
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    isPro?: boolean
  }
}
```

### Modify `src/auth.ts`

JWT 콜백을 항상 데이터베이스에서 `isPro`를 동기화하도록 업데이트합니다. 이렇게 하면 서버 측 업데이트(Stripe 웹훅 등)에서 안정적으로 동작하지 않는 `trigger === "update"`에 의존하지 않고도, 웹훅으로 인해 발생한 변경 사항이 세션에 반영됩니다.

**Current JWT callback (line 80):**
```typescript
jwt({ token, user }) {
  if (user?.id) {
    token.id = user.id
  }
  return token
},
```

**Updated JWT callback:**
```typescript
async jwt({ token, user }) {
  if (user?.id) {
    token.id = user.id
  }

  // Always sync isPro from database to catch webhook updates
  if (token.id) {
    const dbUser = await prisma.user.findUnique({
      where: { id: token.id as string },
      select: { isPro: true },
    });
    token.isPro = dbUser?.isPro ?? false;
  }

  return token;
},
```

**Updated session callback (line 87):**
```typescript
session({ session, token }) {
  if (token?.id && session.user) {
    session.user.id = token.id as string
    session.user.isPro = token.isPro ?? false
  }
  return session
},
```

> **트레이드오프(Trade-off):** 이 방식은 세션 검증마다 작은 DB 쿼리(`SELECT isPro FROM users WHERE id = ?`) 하나를 추가합니다. 이 쿼리는 기본 키(primary key)에 인덱스가 걸려 있고 단일 boolean 값을 반환하므로 매우 빠릅니다. 장점은 Stripe 웹훅이 데이터베이스를 업데이트한 후에도 `session.user.isPro`가 항상 정확하다는 점입니다.

---

## Phase 3: Checkout Flow

### Create `src/app/api/stripe/checkout/route.ts`

Stripe Checkout Session을 생성하고 URL을 반환합니다.

```typescript
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { priceId } = await request.json();

    // Validate price ID
    const validPriceIds = [
      process.env.STRIPE_PRICE_ID_MONTHLY,
      process.env.STRIPE_PRICE_ID_YEARLY,
    ];

    if (!priceId || !validPriceIds.includes(priceId)) {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    // Get or create Stripe customer
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { stripeCustomerId: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    let customerId = user.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { userId: session.user.id },
      });

      customerId = customer.id;

      await prisma.user.update({
        where: { id: session.user.id },
        data: { stripeCustomerId: customerId },
      });
    }

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
      metadata: { userId: session.user.id },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
```

---

## Phase 4: Webhook Handler

### Create `src/app/api/webhooks/stripe/route.ts`

Stripe 웹훅 이벤트를 처리하여 구독 상태를 동기화합니다.

```typescript
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(invoice);
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentFailed(invoice);
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }
    }
  } catch (error) {
    console.error(`Error handling ${event.type}:`, error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId;
  if (!userId) return;

  const subscriptionId =
    typeof session.subscription === 'string'
      ? session.subscription
      : session.subscription?.id;

  if (!subscriptionId) return;

  await prisma.user.update({
    where: { id: userId },
    data: {
      isPro: true,
      stripeCustomerId: typeof session.customer === 'string'
        ? session.customer
        : session.customer?.id ?? undefined,
      stripeSubscriptionId: subscriptionId,
    },
  });
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const customerId =
    typeof invoice.customer === 'string'
      ? invoice.customer
      : invoice.customer?.id;

  if (!customerId) return;

  // Ensure user stays pro after successful renewal
  await prisma.user.updateMany({
    where: { stripeCustomerId: customerId },
    data: { isPro: true },
  });
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const customerId =
    typeof invoice.customer === 'string'
      ? invoice.customer
      : invoice.customer?.id;

  if (!customerId) return;

  // Optional: Log or notify. Don't immediately downgrade.
  // Stripe retries failed payments. Only downgrade on subscription.deleted.
  console.warn(`Payment failed for customer ${customerId}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId =
    typeof subscription.customer === 'string'
      ? subscription.customer
      : subscription.customer?.id;

  if (!customerId) return;

  // Handle status changes (e.g., past_due, canceled, active)
  const isActive = ['active', 'trialing'].includes(subscription.status);

  await prisma.user.updateMany({
    where: { stripeCustomerId: customerId },
    data: {
      isPro: isActive,
      stripeSubscriptionId: subscription.id,
    },
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId =
    typeof subscription.customer === 'string'
      ? subscription.customer
      : subscription.customer?.id;

  if (!customerId) return;

  await prisma.user.updateMany({
    where: { stripeCustomerId: customerId },
    data: {
      isPro: false,
      stripeSubscriptionId: null,
    },
  });
}
```

**중요:** 웹훅 route는 반드시 원본 본문(raw body, JSON 파싱되지 않은)을 받아야 합니다. Next.js App Router route는 `request.text()`를 사용할 때 기본적으로 원본 본문을 받으므로 별도의 설정이 필요하지 않습니다.

---

## Phase 5: Customer Portal

### Create `src/app/api/stripe/portal/route.ts`

인증된 Pro 사용자를 Stripe가 호스팅하는 결제 포털로 리다이렉트합니다.

```typescript
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { stripeCustomerId: true },
    });

    if (!user?.stripeCustomerId) {
      return NextResponse.json(
        { error: 'No billing account found' },
        { status: 400 }
      );
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error('Portal error:', error);
    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    );
  }
}
```

---

## Phase 6: Feature Gating

### Modify `src/actions/items.ts` - `createItem`

item을 생성하기 전에 사용량 제한 확인을 추가합니다.

```typescript
// Add import at top
import { canCreateItem } from '@/lib/usage';

export async function createItem(input: CreateItemInput): Promise<ActionResult> {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  // Check Pro requirement for file/image types
  if (['file', 'image'].includes(input.typeName) && !session.user.isPro) {
    return { success: false, error: 'File and image uploads require a Pro subscription' };
  }

  // Check usage limits
  const allowed = await canCreateItem(session.user.id, session.user.isPro);
  if (!allowed) {
    return { success: false, error: 'You have reached the free tier limit of 50 items. Upgrade to Pro for unlimited items.' };
  }

  // ... rest of existing createItem logic
}
```

### Modify `src/actions/collections.ts` - `createCollection`

collection을 생성하기 전에 사용량 제한 확인을 추가합니다.

```typescript
// Add import at top
import { canCreateCollection } from '@/lib/usage';

export async function createCollection(input: CreateCollectionInput): Promise<ActionResult> {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  // Check usage limits
  const allowed = await canCreateCollection(session.user.id, session.user.isPro);
  if (!allowed) {
    return { success: false, error: 'You have reached the free tier limit of 3 collections. Upgrade to Pro for unlimited collections.' };
  }

  // ... rest of existing createCollection logic
}
```

### Modify `src/app/api/upload/route.ts`

파일/이미지 업로드를 허용하기 전에 Pro 확인을 추가합니다.

```typescript
// After the auth check, add:
if (!session.user.isPro) {
  return NextResponse.json(
    { error: 'File uploads require a Pro subscription' },
    { status: 403 }
  );
}
```

> **참고:** upload route는 현재 `session.user.id`만 사용합니다. Phase 2 이후에는 `session.user.isPro`를 사용할 수 있게 됩니다. 다만 upload route는 (JWT 클라이언트 측이 아닌) `auth()`를 직접 사용하므로, upload API route에는 JWT로 보강된 세션이 없을 수 있어 여기서 `isPro`를 데이터베이스에서 가져와야 합니다. 다른 방법으로는 `isPro`를 직접 조회할 수 있습니다:

```typescript
const user = await prisma.user.findUnique({
  where: { id: session.user.id },
  select: { isPro: true },
});

if (!user?.isPro) {
  return NextResponse.json(
    { error: 'File uploads require a Pro subscription' },
    { status: 403 }
  );
}
```

---

## Phase 7: UI Components

### Create `src/components/settings/billing-settings.tsx`

현재 플랜과 업그레이드/관리 옵션을 보여주는 설정 페이지용 클라이언트 컴포넌트입니다.

```typescript
'use client';

import { useState } from 'react';
import { CreditCard, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface BillingSettingsProps {
  isPro: boolean;
  itemCount: number;
  collectionCount: number;
}

export default function BillingSettings({ isPro, itemCount, collectionCount }: BillingSettingsProps) {
  const [loading, setLoading] = useState<'monthly' | 'yearly' | 'portal' | null>(null);

  async function handleUpgrade(plan: 'monthly' | 'yearly') {
    setLoading(plan);
    try {
      const priceId = plan === 'monthly'
        ? process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY
        : process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY;

      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.error || 'Failed to start checkout');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(null);
    }
  }

  async function handleManageBilling() {
    setLoading('portal');
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.error || 'Failed to open billing portal');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CreditCard className="size-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Billing</h2>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        {/* Current Plan */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Current Plan</span>
              <Badge variant={isPro ? 'default' : 'secondary'}>
                {isPro ? 'Pro' : 'Free'}
              </Badge>
            </div>
            {!isPro && (
              <p className="text-sm text-muted-foreground mt-1">
                {itemCount}/50 items &middot; {collectionCount}/3 collections
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        {isPro ? (
          <Button
            variant="outline"
            onClick={handleManageBilling}
            disabled={loading === 'portal'}
          >
            {loading === 'portal' ? (
              <Loader2 className="size-4 animate-spin mr-2" />
            ) : (
              <ExternalLink className="size-4 mr-2" />
            )}
            Manage Billing
          </Button>
        ) : (
          <div className="flex gap-3">
            <Button
              onClick={() => handleUpgrade('monthly')}
              disabled={loading !== null}
            >
              {loading === 'monthly' && <Loader2 className="size-4 animate-spin mr-2" />}
              Upgrade $8/mo
            </Button>
            <Button
              variant="outline"
              onClick={() => handleUpgrade('yearly')}
              disabled={loading !== null}
            >
              {loading === 'yearly' && <Loader2 className="size-4 animate-spin mr-2" />}
              Upgrade $72/yr (save 25%)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
```

### Modify `src/app/settings/page.tsx`

EditorSettings와 AccountSettings 사이에 BillingSettings를 추가합니다.

```typescript
// Add imports
import BillingSettings from '@/components/settings/billing-settings';
import { getUserUsage } from '@/lib/usage';

// In the component, after fetching user data:
const usage = await getUserUsage(user.id, session.user.isPro ?? false);

// In the JSX, between EditorSettings and AccountSettings:
<BillingSettings
  isPro={session.user.isPro ?? false}
  itemCount={usage.itemCount}
  collectionCount={usage.collectionCount}
/>
```

### Add `NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY` and `NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY`

클라이언트의 checkout 버튼에는 price ID가 필요합니다. 두 가지 방법이 있습니다:
- **Option A:** price ID를 공개 환경 변수로 만듭니다(`NEXT_PUBLIC_` 접두사 사용) - 더 간단함
- **Option B:** 서버 측에만 두고 checkout API를 통해 전달합니다 - 더 안전함

**권장: Option B** - price ID를 서버 측에 유지합니다. 클라이언트는 `plan: 'monthly' | 'yearly'`를 전송하고, API route가 올바른 price ID로 매핑합니다:

```typescript
// In the checkout API route:
const priceId = plan === 'monthly'
  ? process.env.STRIPE_PRICE_ID_MONTHLY
  : process.env.STRIPE_PRICE_ID_YEARLY;
```

BillingSettings가 `priceId` 대신 `plan`을 전송하도록 업데이트합니다:
```typescript
const res = await fetch('/api/stripe/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ plan }), // 'monthly' or 'yearly'
});
```

### Modify `src/components/homepage/PricingSection.tsx`

Pro "Start Free Trial" 버튼이 인증되지 않은 사용자는 `/register`로(현재 동작), 인증된 사용자는 `/settings`로 연결되도록 업데이트합니다. 간단한 조건 확인으로 처리하거나, 사용자가 먼저 가입한 뒤 설정에서 업그레이드하는 현재 흐름을 유지할 수 있습니다.

### Show `?upgraded=true` Toast

결제가 성공하면 사용자는 `/settings?upgraded=true`로 리다이렉트됩니다. 토스트(toast) 알림을 추가합니다:

```typescript
// In settings page or BillingSettings:
import { useSearchParams } from 'next/navigation';

const searchParams = useSearchParams();
useEffect(() => {
  if (searchParams.get('upgraded') === 'true') {
    toast.success('Welcome to DevStash Pro!');
    // Clean up URL
    window.history.replaceState({}, '', '/settings');
  }
}, [searchParams]);
```

---

## Files Summary

### New Files to Create

| 파일 | 용도 |
|------|---------|
| `src/lib/stripe.ts` | Stripe SDK 초기화 |
| `src/lib/usage.ts` | 무료 티어 사용량 제한 확인 |
| `src/app/api/stripe/checkout/route.ts` | Stripe Checkout 세션 생성 |
| `src/app/api/stripe/portal/route.ts` | Stripe Customer Portal 세션 생성 |
| `src/app/api/webhooks/stripe/route.ts` | Stripe 웹훅 이벤트 처리 |
| `src/components/settings/billing-settings.tsx` | 설정 페이지의 결제 UI |

### Existing Files to Modify

| 파일 | 변경 사항 |
|------|---------|
| `src/auth.ts` | JWT 콜백을 async로 변경하고 DB에서 `isPro` 동기화 추가 |
| `src/types/next-auth.d.ts` | Session 및 JWT 타입에 `isPro` 추가 |
| `src/actions/items.ts` | `createItem`에 사용량 제한 + Pro 타입 확인 추가 |
| `src/actions/collections.ts` | `createCollection`에 사용량 제한 확인 추가 |
| `src/app/api/upload/route.ts` | 파일/이미지 업로드에 대한 Pro 확인 추가 |
| `src/app/settings/page.tsx` | BillingSettings 컴포넌트 + 사용량 데이터 추가 |
| `env.example` | 이미 Stripe 변수 존재(변경 불필요) |

### NPM Package to Install

```bash
npm install stripe
```

---

## Testing Checklist

### Stripe CLI Testing

로컬 웹훅 테스트에는 [Stripe CLI](https://stripe.com/docs/stripe-cli)를 사용합니다:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local dev
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Copy the webhook signing secret and set as STRIPE_WEBHOOK_SECRET
```

### Manual Testing

- [ ] **Checkout Flow**
  - [ ] 설정에서 "Upgrade $8/mo" 클릭 - Stripe Checkout으로 리다이렉트됨
  - [ ] 설정에서 "Upgrade $72/yr" 클릭 - Stripe Checkout으로 리다이렉트됨
  - [ ] 테스트 카드 `4242 4242 4242 4242`로 결제 완료
  - [ ] `/settings?upgraded=true`로 리다이렉트됨
  - [ ] "Welcome to DevStash Pro!" 토스트 표시됨
  - [ ] 설정 페이지에 플랜이 "Pro"로 표시됨
  - [ ] 페이지 새로고침 후 `session.user.isPro`가 `true`임

- [ ] **Webhook Processing**
  - [ ] `checkout.session.completed`가 `isPro=true`로 설정하고 `stripeCustomerId`와 `stripeSubscriptionId`를 저장함
  - [ ] `invoice.paid`가 `isPro=true`를 유지함
  - [ ] `invoice.payment_failed`가 경고를 로깅함(다운그레이드하지 않음)
  - [ ] `customer.subscription.deleted`가 `isPro=false`로 설정하고 `stripeSubscriptionId`를 지움
  - [ ] `status=active`인 `customer.subscription.updated`가 `isPro=true`를 유지함
  - [ ] `status=canceled`인 `customer.subscription.updated`가 `isPro=false`로 설정함

- [ ] **Customer Portal**
  - [ ] Pro 사용자가 "Manage Billing"을 클릭할 수 있음 - Stripe 포털로 리다이렉트됨
  - [ ] 인보이스 조회 가능
  - [ ] 구독 취소 가능
  - [ ] 월간/연간 전환 가능
  - [ ] 포털 이후 `/settings`로 복귀함

- [ ] **Feature Gating**
  - [ ] 무료 사용자가 최대 50개의 item을 생성할 수 있음
  - [ ] 무료 사용자가 50개 item에서 에러를 봄: "You have reached the free tier limit..."
  - [ ] 무료 사용자가 최대 3개의 collection을 생성할 수 있음
  - [ ] 무료 사용자가 3개 collection에서 에러를 봄
  - [ ] 무료 사용자가 File 또는 Image item을 생성할 수 없음
  - [ ] 무료 사용자가 파일을 업로드할 수 없음(upload route에서 403)
  - [ ] Pro 사용자는 item 또는 collection에 제한이 없음
  - [ ] Pro 사용자가 File 및 Image item을 생성할 수 있음
  - [ ] Pro 사용자가 파일을 업로드할 수 있음

- [ ] **Session Sync**
  - [ ] Stripe 웹훅이 `isPro`를 업데이트한 후, 페이지 새로고침이 변경 사항을 반영함
  - [ ] 결제 성공 후 오래된 `isPro=false`가 남지 않음

- [ ] **Edge Cases**
  - [ ] Pro였다가 취소한 사용자: `subscription.deleted` 이후 `isPro`가 `false`로 설정됨
  - [ ] 웹훅 서명 검증 실패: 400 반환, DB 변경 없음
  - [ ] 중복 웹훅 이벤트: 멱등성 유지(updateMany는 안전함)
  - [ ] Stripe 고객이 없는 사용자: checkout이 새 고객을 생성함

### Unit Tests to Write

| 테스트 | 파일 |
|------|------|
| `getUserUsage`가 올바른 카운트와 제한을 반환함 | `src/lib/usage.test.ts` |
| `canCreateItem`이 제한에서 false를 반환함 | `src/lib/usage.test.ts` |
| `canCreateCollection`이 제한에서 false를 반환함 | `src/lib/usage.test.ts` |
| Pro 사용자가 모든 제한을 우회함 | `src/lib/usage.test.ts` |
| `createItem`이 무료 사용자에게 file 타입을 거부함 | `src/actions/items.test.ts` |
| `createItem`이 item 제한에서 거부함 | `src/actions/items.test.ts` |
| `createCollection`이 collection 제한에서 거부함 | `src/actions/collections.test.ts` |

### Stripe Test Cards

| 카드 번호 | 시나리오 |
|-------------|----------|
| `4242 4242 4242 4242` | 결제 성공 |
| `4000 0000 0000 0002` | 카드 거절됨 |
| `4000 0000 0000 3220` | 3D Secure 필요 |

---

_Generated: February 2026_
