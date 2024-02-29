import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.id]: prevState[e.target.id] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default App;
