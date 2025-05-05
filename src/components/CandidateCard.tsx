// src/components/CandidateCard.tsx
import React from 'react';
import { User } from '../types';

interface Props {
  user: User;
  showDetails?: boolean;
}

export default function CandidateCard({ user, showDetails }: Props) {
  return (
    <div className="candidate-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name ?? user.login}</h2>
      <p><strong>Username:</strong> {user.login}</p>
      {user.location && <p><strong>Location:</strong> {user.location}</p>}
      {user.company && <p><strong>Company:</strong> {user.company}</p>}
      {user.email && <p><strong>Email:</strong> {user.email}</p>}

      {showDetails && (
        <>
          {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Public repos:</strong> {user.public_repos}</p>
        </>
      )}

      <p style={{ textAlign: 'center', marginTop: '16px' }}>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>
    </div>
  );
}
