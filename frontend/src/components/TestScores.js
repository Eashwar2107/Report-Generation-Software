import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function TestScores() {
  const [testScores, setTestScores] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rollNumber = searchParams.get('rollNumber');
  const testName = location.pathname.split('/').pop();

  useEffect(() => {
    axios.get(`/api/testscores/${rollNumber}?testName=${testName}`)
      .then(response => {
        setTestScores(response.data);
      })
      .catch(error => {
        setError('Error fetching test scores.');
      });
  }, [rollNumber, testName]);

  return (
    <div className="container">
      <h2>{testName} Scores</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Score</th>
              {/* Add more headers if needed */}
            </tr>
          </thead>
          <tbody>
            {testScores.map((score, index) => (
              <tr key={index}>
                <td>{score}</td>
                {/* Render other score details if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TestScores;
