import React from 'react';

function shuffleAnswers(correct, incorrect) {
  const allAnswers = [...incorrect, correct];
  return allAnswers.sort(() => Math.random() - 0.5);
}

function QuestionForm({ questionData, selectedAnswer, setSelectedAnswer, onSubmit, error, apiError }) {
  if (apiError) {
    return <p style={{ color: 'red' }}>{apiError}</p>;
  }

  const answers = shuffleAnswers(questionData.correct_answer, questionData.incorrect_answers);

  return (
    <form onSubmit={onSubmit}>
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />
      
      {answers.map((answer, idx) => (
        <div key={idx}>
          <label>
            <input
              type="radio"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </label>
        </div>
      ))}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Submit Answer</button>
    </form>
  );
}

export default QuestionForm;
