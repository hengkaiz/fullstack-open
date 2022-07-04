import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = ({ clicks }) => {
  var all = clicks.good + clicks.neutral + clicks.bad;
  var average = (clicks.good + -1 * clicks.bad) / all;
  var positive = (clicks.good / all) * 100;

  if (all <= 0) return <p>No feedback given</p>;

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={clicks.good} />
          <StatisticLine text="neutral" value={clicks.neutral} />
          <StatisticLine text="bad" value={clicks.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive.toString() + " %"} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header title="statistics" />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
