import { useEffect, useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

export default function SavedCandidates() {
  const [saved, setSaved] = useState<Candidate[]>([]);

  // Load saved candidates on mount
  useEffect(() => {
    const json = localStorage.getItem('savedCandidates') || '[]';
    try {
      const parsed = JSON.parse(json);
      setSaved(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error('Failed to parse saved candidates:', err);
      setSaved([]);
    }
  }, []);

  // Remove candidate by login
  const removeCandidate = (login: string) => {
    const updated = saved.filter(user => user.login !== login);
    setSaved(updated);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
  };

  return (
    <main>
      <h1 style={{ marginBottom: '1.5rem' }}>Saved Candidates</h1>

      {saved.length === 0 ? (
        <p style={{ color: 'var(--color-muted)' }}>
          You haven’t accepted any candidates yet.
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {saved.map(candidate => (
            <div key={candidate.login} className="candidate-card">
              <CandidateCard
                user={{ ...candidate, avatar_url: candidate.avatar_url || '' }}
                showDetails
              />
              <button
                style={{ marginTop: '1rem', backgroundColor: 'var(--color-accent)' }}
                onClick={() => removeCandidate(candidate.login)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
