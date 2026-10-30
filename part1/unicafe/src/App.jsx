import { useState } from "react";

const Statistics = ({ all, stats }) => {
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      {buildStatLines(stats)}
      </tbody>
    </table>
  )
}


const StatisticLine = ({ label, value }) => {
  if (label === 'positive') {
    value = `${value.toFixed(2)}%`
  }
  return (
    <tr>
      <td>{label}:</td>
      <td>{value}</td>
    </tr>
  )
}

const buildStatLines = (stats) => {
  const items = stats.map(stat =>
    <StatisticLine key={stat.label} label={stat.label} value={stat.value} />
  )
  return items 
}

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const stats = [
    {
      label: 'good',
      value: good
    },
    {
      label: 'neutral',
      value: neutral
    },
    {
      label: 'bad',
      value: bad
    },
    {
      label: 'all',
      value: all
    },
    {
      label: 'average',
      value: average
    },
    {
      label: 'positive',
      value: positive
    }
  ]

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
      <Statistics all={all} stats={stats} />
    </div>
  )
}

export default App