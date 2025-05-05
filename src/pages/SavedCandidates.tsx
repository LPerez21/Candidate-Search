import { useEffect, useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import { User } from '../types';

export default function SavedCandidates() {
  // 1) state to hold the saved list
  const [saved, setSaved] = useState<User[]>([]);

  // 2) on mount, read from localStorage
  useEffect(() => {
    const json = localStorage.getItem('saved') || '[]';
    setSaved(JSON.parse(json));
  }, []);

  // 3) remove helper
  const remove = (login: string) => {
    const updated = saved.filter(u => u.login !== login);
    setSaved(updated);
    localStorage.setItem('saved', JSON.stringify(updated));
  };

  // 4) render empty message or list
  if (saved.length === 0) {
    return <p>You haven’t accepted any candidates yet.</p>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      {saved.map(user => (
        <div key={user.login} style={{ marginBottom: 24 }}>
          <CandidateCard user={user} />
          <button onClick={() => remove(user.login)}>Remove</button>
        </div>
      ))}
    </div>
  );
}