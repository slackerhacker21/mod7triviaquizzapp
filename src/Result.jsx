import React from 'react';

function Result({ userName, result, correctAnswer, question, handleRestart }) {
  return (
    <div>
      <h2>Result</h2>
      <p><strong>{userName}</strong>, you got the answer <strong>{result.toUpperCase()}</strong>!</p>

      {result === 'incorrect' && (
        <div>
          <p>The correct answer was:</p>
          <p style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: correctAnswer }} />
        </div>
      )}

      <p dangerouslySetInnerHTML={{ __html: `Question: ${question}` }} />

      <button onClick={handleRestart}>Try Another Question</button>
    </div>
  );
}

export default Result;
