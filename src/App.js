import React, { useState, useEffect } from 'react';
import Question from './Question';
import ScoreDisplay from './ScoreDisplay';
import { QUESTIONS } from './questions';

const App = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const allScores = JSON.parse(localStorage.getItem('scores') || '[]');
    const totalScore = allScores.reduce((acc, curr) => acc + curr, 0);
    const avg = allScores.length ? totalScore / allScores.length : 0;
    setAverageRating(avg);
  }, []);

  const handleAnswer = (id, answer) => {
    const newAnswers = { ...answers, [id]: answer };
    setAnswers(newAnswers);

    const yesCount = Object.values(newAnswers).filter(ans => ans === 'Yes').length;
    const currentScore = (yesCount / Object.keys(QUESTIONS).length) * 100;
    setScore(currentScore);
  };

  const handleSubmit = () => {
    const allScores = JSON.parse(localStorage.getItem('scores') || '[]');
    const newScores = [...allScores, score];
    localStorage.setItem('scores', JSON.stringify(newScores));

    const totalScore = newScores.reduce((acc, curr) => acc + curr, 0);
    const avg = newScores.length ? totalScore / newScores.length : 0;
    setAverageRating(avg);

    setAnswers({});
    setScore(0);
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <h1>Programming Language Questionnaire</h1>
        {Object.keys(QUESTIONS).map((key) => (
          <Question
            key={key}
            id={parseInt(key)}
            text={QUESTIONS[parseInt(key)]}
            onAnswer={handleAnswer}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
        <ScoreDisplay score={score} averageRating={averageRating} />
      </main>
    </div>
  );
};

export default App;
