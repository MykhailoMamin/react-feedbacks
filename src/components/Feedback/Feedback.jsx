import React from 'react';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button type="button" id={index} onClick={e => onLeaveFeedback(e)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
