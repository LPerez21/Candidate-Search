import type { Candidate } from '../interfaces/Candidate.interface';
import { IoRemoveCircle } from 'react-icons/io5';

// To be rendered in the SavedCandidateList
type SavedCandidateProps = {
  candidate: Candidate;
  rejectCandidate: (id: number) => void;
};

const SavedCandidate = ({ candidate, rejectCandidate }: SavedCandidateProps) => {
  if (!candidate) {
    return (
      <tr>
        <td colSpan={7}>
          <h2>No Candidates at this time</h2>
        </td>
      </tr>
    );
  }
  
  // Extracted styles
  const styles = {
    avatar: {
      width: '70px',
      borderRadius: '10px',
      display: 'block',
      margin: '0 auto',
    },
    name: {
      color: 'white',
    },
    removeButton: {
      color: 'red',
      margin: '0 auto',
      display: 'block',
      cursor: 'pointer',
      fontSize: '50px',
    },
  };

  return (
    <tr>
      <td>
        <img
          src={candidate.avatar_url || 'https://placehold.co/70x70'}
          alt={`Profile of ${candidate.login || 'Placeholder'}`}
          style={styles.avatar}
        />
      </td>
      <td>
        <a href={candidate.html_url || '#'} target="_blank" rel="noreferrer">
          <h3 style={styles.name}>
            {candidate.name}
            <br />
            <em>({candidate.login})</em>
          </h3>
        </a>
      </td>
      <td>{candidate.location || 'N/A'}</td>
      <td>
        {candidate.email ? (
          <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
        ) : (
          'N/A'
        )}
      </td>
      <td>{candidate.company || 'N/A'}</td>
      <td>
        <div
          style={{maxHeight: '100px', overflowY: 'scroll', textAlign: 'justify',}}
          > 
          {candidate.bio || 'No bio available'}
        </div>
      </td>
      <td>
        <IoRemoveCircle
          style={styles.removeButton}
          onClick={() => rejectCandidate(candidate.id || 0)}
        />
      </td>
    </tr>
  );
};

export default SavedCandidate;