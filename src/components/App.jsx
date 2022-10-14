import React, { Component } from 'react';
import { Wrapper, Title, FeedbackReviews, Button } from './App.styled';
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
        <Title className="Feedback__span">Please leave feedback</Title>
        <FeedbackReviews
          className="Feedback__reviews"
          onClick={this.handleClick}
        >
          <Button name="good" type="button">
            Good
          </Button>

          <Button name="neutral" type="button">
            Neutal
          </Button>

          <Button name="bad" type="button">
            Bad
          </Button>
        </FeedbackReviews>

        {total === 0 ? (
          <span>There is no feedback</span>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Wrapper>
    );
  }
}
