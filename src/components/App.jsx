import React, { Component, useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import { Container } from 'App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.ceil((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <Container>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positive={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Container>
//     );
//   }
// }
