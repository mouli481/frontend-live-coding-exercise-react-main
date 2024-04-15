import React from 'react';

const ScoreDisplay = ({ score, averageRating }) => {
  return (
    <div className="score__wrap">
      <p>Score: {score.toFixed(2)}%</p>
      <p>Average Rating: {averageRating.toFixed(2)}%</p>
    </div>
  );
};

export default ScoreDisplay;
