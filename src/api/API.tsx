console.log('ENV KEYS:', Object.keys(import.meta.env));
console.log('VITE_GITHUB_TOKEN:', import.meta.env.VITE_GITHUB_TOKEN);

import { User } from '../types';

const GITHUB_BASE = 'https://api.github.com';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string;

// Internal helper to perform fetch with the GitHub token
async function fetchWithAuth<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  // Debug: show that Vite has picked up your token
  console.debug('[API] Using GitHub token:', TOKEN);

  const headers = {
    // GitHub expects "token" here
    Authorization: `token ${TOKEN}`,
    ...(init?.headers || {}),
  };

  const res = await fetch(input, { ...init, headers });
  const data = (await res.json()) as T;

  if (!res.ok) {
    throw new Error(`GitHub API error (${res.status}): ${res.statusText}`);
  }
  return data;
}

// Retrieve a page of GitHub users starting after a random offset.
export async function searchGithub(
  since: number = Math.floor(Math.random() * 1e8) + 1
): Promise<User[]> {
  return fetchWithAuth<User[]>(`${GITHUB_BASE}/users?since=${since}`);
}

// Retrieve a single GitHub user by username.
export async function searchGithubUser(username: string): Promise<User> {
  return fetchWithAuth<User>(`${GITHUB_BASE}/users/${username}`);
}