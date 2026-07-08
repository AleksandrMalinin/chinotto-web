export type ShareThreadRecord = {
  html: string;
  expiresAt: string;
  contextNote?: string;
  createdAt: string;
};

export type ShareThreadPublishBody = {
  token: string;
  html: string;
  expiresAt: string;
  contextNote?: string | null;
};
