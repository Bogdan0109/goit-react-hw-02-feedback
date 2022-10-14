import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 100,
  };

  handleClick = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const { name } = e.target;

    this.setState({ [name]: this.state[name] + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prewState => {
      return { total: prewState.good + prewState.neutral + prewState.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    // const { good, total } = this.state;

    this.setState(prewState => {
      return {
        positiveFeedback: Math.round((prewState.good / prewState.total) * 100),
      };
    });
    /* <span>There is no feedback</span> */
    // return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <Wrapper className="Reviews">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onClick={this.handleClick} />
        </Section>

        {total === 0 ? (
          <span>There is no feedback</span>
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          </Section>
        )}
      </Wrapper>
    );
  }
}
