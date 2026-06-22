import { useEffect } from "react";
import { siteDescription, siteTitle } from "../content/continuity";

const SITE_NAME = "Chinotto";
const DEFAULT_TITLE = siteTitle;
const DEFAULT_DESCRIPTION = siteDescription;

interface DocumentMetaOptions {
  title: string;
  description?: string;
}

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

/** Updates document title and description for SPA routes; restores defaults on unmount. */
export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDescription = descEl?.getAttribute("content") ?? DEFAULT_DESCRIPTION;

    const pageTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    document.title = pageTitle;

    if (description && descEl) {
      descEl.setAttribute("content", description);
      setMetaContent('meta[property="og:title"]', pageTitle);
      setMetaContent('meta[property="og:description"]', description);
      setMetaContent('meta[name="twitter:title"]', pageTitle);
      setMetaContent('meta[name="twitter:description"]', description);
    }

    return () => {
      document.title = prevTitle;
      if (description && descEl) {
        descEl.setAttribute("content", prevDescription);
        setMetaContent('meta[property="og:title"]', DEFAULT_TITLE);
        setMetaContent('meta[property="og:description"]', DEFAULT_DESCRIPTION);
        setMetaContent('meta[name="twitter:title"]', DEFAULT_TITLE);
        setMetaContent('meta[name="twitter:description"]', DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
