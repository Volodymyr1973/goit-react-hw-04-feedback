import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import css from '../components/section/Section.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveFeedback = event => {
  //   if (event.target.name === 'good') {
  //     this.setState(prevState => ({ good: prevState.good + 1 }));
  //   } else if (event.target.name === 'neutral') {
  //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   } else if (event.target.name === 'bad') {
  //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   }
  // };

  onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.wrapper}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onChange={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
