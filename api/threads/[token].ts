import type { VercelRequest, VercelResponse } from "@vercel/node";
import { deleteShareThread } from "../lib/store.js";
import { isValidToken } from "../lib/validate.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    if (req.method !== "DELETE") {
      res.setHeader("Allow", "DELETE");
      res.status(405).json({ error: "method not allowed" });
      return;
    }

    const raw = req.query.token;
    const token =
      typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
    if (!token || !isValidToken(token)) {
      res.status(400).json({ error: "invalid token" });
      return;
    }

    const removed = await deleteShareThread(token);
    if (!removed) {
      res.status(404).json({ error: "not found" });
      return;
    }

    res.status(204).end();
  } catch (err) {
    console.error("[share] DELETE /api/threads failed", err);
    res.status(500).json({ error: "storage failed" });
  }
}
