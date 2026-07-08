import type { VercelRequest, VercelResponse } from "@vercel/node";
import { putShareThread, usingMemoryStore } from "../../share/store";
import { parsePublishBody } from "../../share/validate";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const parsed = parsePublishBody(req.body);
  if (!parsed.ok) {
    res.status(400).json({ error: parsed.error });
    return;
  }

  const { token, html, expiresAt, contextNote } = parsed.body;
  await putShareThread(token, {
    html,
    expiresAt,
    contextNote: contextNote ?? undefined,
    createdAt: new Date().toISOString(),
  });

  if (usingMemoryStore()) {
    res.setHeader("X-Chinotto-Share-Store", "memory");
  }

  res.status(201).json({ ok: true, token });
}
