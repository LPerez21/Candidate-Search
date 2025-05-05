// src/pages/CandidateSearch.tsx
import React, { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { User } from '../types';

export default function CandidateSearch() {
  const [candidates, setCandidates] = useState<User[]>([]);
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const fetchBatch = async () => {
    setLoading(true);
    setError(null);
    setIdx(0);
    try {
      const list = await searchGithub();
      const batch = list.slice(0, 10);
      const settles = await Promise.allSettled(
        batch.map(u => searchGithubUser(u.login))
      );
      const full = settles
        .filter((r): r is PromiseFulfilledResult<User> => r.status === 'fulfilled')
        .map(r => r.value);
      setCandidates(full);
    } catch (e: any) {
      setError(e.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatch();
  }, []);

  const next = () => setIdx(i => i + 1);
  const accept = () => {
    const saved = JSON.parse(localStorage.getItem('saved') || '[]') as User[];
    saved.push(candidates[idx]);
    localStorage.setItem('saved', JSON.stringify(saved));
    next();
  };

  if (loading) return <p>Loading candidates…</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (candidates.length === 0) return <p>No candidates found.</p>;
  if (idx >= candidates.length) return <p>No more candidates.</p>;

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '40px auto',
        textAlign: 'center',
      }}
    >
      {/* New controls */}
      <div style={{ marginBottom: '16px' }}>
        <button onClick={fetchBatch} style={{ marginRight: '8px' }} disabled={loading}>
          🔄 Refresh Batch
        </button>
        <button onClick={() => setShowDetails(d => !d)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Card */}
      <CandidateCard user={candidates[idx]} showDetails={showDetails} />

      {/* Accept / Skip */}
      <div style={{ marginTop: '16px' }}>
        <button onClick={accept} style={{ marginRight: '8px' }}>
          +
        </button>
        <button onClick={next}>–</button>
      </div>
    </div>
  );
}
