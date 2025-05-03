// src/types.ts
export interface User {
  login: string;
  avatar_url: string;
  html_url: string;

  // core fields you already had:
  name: string | null;
  location: string | null;
  company: string | null;
  email: string | null;

  // for “details” toggle:
  bio?: string;
  followers?: number;
  public_repos?: number;
}
