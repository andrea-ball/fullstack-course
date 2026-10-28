import { useState } from "react";

const Statistics = ({label, value}) => {
  if(label === 'average' || label === 'positive'){
    value = Number.isNaN(value) ? 0 : value
  }
  if(label === 'positive'){
    value = `${value.toFixed(2)}%`
  }
  
  return (
    <p>{label}: {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = (good/all)*100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics label='good' value={good} />
      <Statistics label='neutral' value={neutral} />
      <Statistics label='bad' value={bad} />
      <Statistics label='all' value={all} />
      <Statistics label='average' value={average} />
      <Statistics label='positive' value={positive} />
    </div>
  )
}

export default App