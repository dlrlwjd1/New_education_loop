import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type ErrorRequestHandler } from "express";
import roadmapsRouter from "./routes/roadmaps.js";
import materialsRouter from "./routes/materials.js";
import { renderMessage } from "./views/layout.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));

/** 002 `queries.ts`'s `openReadOnlyOrThrow` throws exactly this Korean message when the cache hasn't been loaded yet or is unreadable. */
const CACHE_NOT_READY_MARKER = "영속 저장소를 열 수 없습니다";

/**
 * spec.md Edge Cases: "002의 저장소가 아직 한 번도 적재되지 않았거나 최신이
 * 아니면? → 화면은... 적재가 필요하다는 것을 알 수 있는 상태를 보인다." Every
 * route handler is synchronous, so a thrown error (e.g. 002's
 * `openReadOnlyOrThrow`) reaches Express's error-handling middleware
 * automatically — this turns that specific, expected case into a friendly
 * page instead of Express's default stack-trace error page, and falls back
 * to a generic (non-leaking) message for anything else unexpected.
 */
const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
  const message = err instanceof Error ? err.message : String(err);
  if (message.includes(CACHE_NOT_READY_MARKER)) {
    res
      .status(503)
      .type("html")
      .send(
        renderMessage({
          title: "저장소가 아직 준비되지 않았습니다",
          message: "학습 데이터를 아직 적재하지 않았습니다. 서버 관리자가 먼저 데이터 적재를 실행해야 합니다.",
        }),
      );
    return;
  }
  console.error(err);
  res
    .status(500)
    .type("html")
    .send(renderMessage({ title: "오류가 발생했습니다", message: "요청을 처리하는 중 오류가 발생했습니다." }));
};

/**
 * Builds the configured Express app without calling `.listen()`, so tests
 * can pass it to `supertest(createApp())` without opening a real socket
 * (research.md §8).
 */
export function createApp(): express.Express {
  const app = express();
  app.use(express.static(path.join(HERE, "public")));
  app.use(roadmapsRouter);
  app.use(materialsRouter);
  app.use(handleError);
  return app;
}

const isMainModule = process.argv[1] !== undefined && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  const app = createApp();
  app.listen(port, () => {
    console.log(`Learning Loop web app listening on http://localhost:${port}`);
  });
}
