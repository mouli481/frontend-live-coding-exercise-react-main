import React from 'react';

const Question = ({ id, text, onAnswer }) => {
  const handleYes = () => {
    onAnswer(id, 'Yes');
  };

  const handleNo = () => {
    onAnswer(id, 'No');
  };

  return (
    <div className="question__wrap">
      <p>{text}</p>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default Question;
