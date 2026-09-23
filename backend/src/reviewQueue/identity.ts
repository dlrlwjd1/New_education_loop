import { createHash } from "node:crypto";

/**
 * research.md §2: normalize each text field the same way
 * `ingestion/resolveIdentity.ts`'s `normalizeSourcePath` normalizes a path —
 * Unicode NFC so the same Korean text typed via two different composition
 * forms doesn't produce two different ids — but adapted for free text rather
 * than a path (no separator/slash handling, since these fields are not
 * paths): just NFC-normalize and trim leading/trailing whitespace.
 */
function normalizeText(value: string): string {
  return value.normalize("NFC").trim();
}

/**
 * Content-based deterministic identifier for one review item (research.md
 * §2, data-model.md): `sha256(item + "\0" + topic + "\0" + firstWrongDate)`
 * after NFC-normalizing and trimming each field.
 *
 * `firstWrongDate` is part of the key (not just item+topic) so that the same
 * concept missed again later — a genuine relapse — becomes a distinct item
 * rather than being silently merged with the earlier one (spec.md Edge Case:
 * "같은 개념·주제 조합이 표에 중복으로 적혀 있는 경우… 서로 다른 항목으로
 * 유지한다").
 *
 * An `ActiveReviewItem` moved to `MasteredItem` keeps the same id because all
 * three inputs (item/topic/firstWrongDate) are unchanged by graduating.
 */
export function computeReviewItemId(item: string, topic: string, firstWrongDate: string): string {
  const normalizedItem = normalizeText(item);
  const normalizedTopic = normalizeText(topic);
  const normalizedFirstWrongDate = normalizeText(firstWrongDate);
  return createHash("sha256")
    .update(`${normalizedItem}\0${normalizedTopic}\0${normalizedFirstWrongDate}`)
    .digest("hex");
}
