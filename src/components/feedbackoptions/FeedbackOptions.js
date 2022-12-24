import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onChange, options }) => {
  const optionsBtn = Object.keys(options);
  return (
    <div className={css.feedback__box}>
      {optionsBtn.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          className={css[`button__${option}`]}
          onClick={onChange}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
};
