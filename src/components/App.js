import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import css from '../components/section/Section.module.css';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);
  const options = { good, neutral, bad };

  const onLeaveFeedback = event => {
    console.log(event.target.name);
    switch (event.target.name) {
      case 'good':
        setGoodFeedback(good + 1);
        break;

      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;

      case 'bad':
        setBadFeedback(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div className={css.wrapper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onChange={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
