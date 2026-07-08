import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getShareThread } from "../../share/store";
import { isValidToken } from "../../share/validate";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const raw = req.query.token;
  const token = typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
  if (!token || !isValidToken(token)) {
    res.status(404).json({ error: "not found" });
    return;
  }

  const record = await getShareThread(token);
  if (!record) {
    res.status(404).json({ error: "not found" });
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.status(200).send(record.html);
}
