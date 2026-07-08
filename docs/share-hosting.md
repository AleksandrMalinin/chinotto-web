# Share hosting (`share.chinotto.app`)

Private thread read URLs for the Chinotto desktop app. Implemented as **Vercel serverless functions** in this repo; separate from the static marketing SPA (`src/`).

Contract matches `chinotto-app` → `docs/internal/sharing.md` (Slice 2).

---

## Routes

| URL | Handler | Method |
|-----|---------|--------|
| `/api/threads` | `api/threads/index.ts` | POST — store HTML snapshot |
| `/api/threads/{token}` | `api/threads/[token].ts` | DELETE — revoke |
| `/t/{token}` | `api/t/[token].ts` (via rewrite) | GET — serve HTML |

POST body (JSON, camelCase):

```json
{
  "token": "uuid-v4",
  "html": "<!DOCTYPE html>…",
  "expiresAt": "2026-07-08T12:00:00Z",
  "contextNote": "optional"
}
```

Responses: **201** create, **204** delete, **404** missing/expired, **400** validation error.

GET returns stored HTML with `noindex`, `Cache-Control: private, no-store`.

---

## Storage

- **Production:** [Upstash Redis](https://vercel.com/marketplace/upstash) on Vercel (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`). Legacy `KV_REST_API_*` env names also work. Keys `share:thread:{token}` with TTL through `expiresAt`.
- **Local `vercel dev` without KV:** in-memory store (single process; not for production). Response header `X-Chinotto-Share-Store: memory`.

---

## Deploy

1. Vercel project for this repo (or a dedicated project for `share.chinotto.app`).
2. Add **Upstash Redis** from the Vercel Marketplace; connect env vars to the project.
3. Assign domain **`share.chinotto.app`** to the same project (or a share-only deployment).
4. Marketing site can stay on `getchinotto.app`; API routes do not affect `pnpm build` output.

```bash
pnpm install
vercel dev          # local API + optional memory store
pnpm typecheck:api  # api + share TypeScript
pnpm test:share     # validation unit tests
```

---

## Privacy

- No analytics on share routes.
- No index (`X-Robots-Tag`, `robots` meta in HTML from desktop).
- Data deleted on revoke or TTL expiry.
- Desktop remains source of truth; server holds snapshot copy only.
