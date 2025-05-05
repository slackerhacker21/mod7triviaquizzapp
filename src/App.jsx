// src/App.jsx
import React, { useState } from 'react';
import HomeForm from './components/HomeForm';
import QuestionForm from './components/QuestionForm';
import Result from './components/Result';

function App() {
  const [formData, setFormData] = useState({ name: '', category: '', difficulty: '' });
  const [step, setStep] = useState(1);
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [apiError, setApiError] = useState('');

  const handleHomeSubmit = async (data) => {
    setFormData(data);
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&category=${data.category}&difficulty=${data.difficulty}&type=multiple`
      );
      const json = await response.json();
      if (json.response_code !== 0 || !json.results[0]) {
        setApiError('No question returned. Try different options.');
        return;
      }
      setQuestionData(json.results[0]);
      setStep(2);
    } catch (err) {
      setApiError('Failed to fetch question. Check your connection.');
    }
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError('Please select an answer.');
      return;
    }
    setError('');
    const isCorrect = selectedAnswer === questionData.correct_answer;
    setResult(isCorrect ? 'correct' : 'incorrect');
    setStep(3);
  };

  const handleRestart = () => {
    setFormData({ name: '', category: '', difficulty: '' });
    setSelectedAnswer('');
    setQuestionData(null);
    setResult('');
    setApiError('');
    setStep(1);
  };

  return (
    <div className="App">
      {step === 1 && <HomeForm onSubmit={handleHomeSubmit} />}
      {step === 2 && (
        <QuestionForm
          questionData={questionData}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          onSubmit={handleQuestionSubmit}
          error={error}
          apiError={apiError}
        />
      )}
      {step === 3 && (
        <Result
          userName={formData.name}
          result={result}
          correctAnswer={questionData.correct_answer}
          question={questionData.question}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
