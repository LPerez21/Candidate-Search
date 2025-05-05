export interface Candidate {
    id: number;
    login: string;
    name?: string;
    email?: string;
    html_url?: string;
    bio?: string;
    company?: string;
    location?: string;
    avatar_url?: string;
  
    followers?: number;
    public_repos?: number;
  }
  