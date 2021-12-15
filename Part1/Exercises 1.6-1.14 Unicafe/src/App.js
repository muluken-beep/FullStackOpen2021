import React, { useState } from 'react'


const Statistics = (props) => {
  if(props.bad===0 && props.good===0 && props.neutral===0){
    return<div>
      <h1>Statistics</h1>
      <div>No feedback given</div>
    </div>
  } 

  return <div>
  <h1>Statistics</h1>
  <div>good {props.good}</div>
  <div>neutral {props.neutral}</div>
  <div>bad {props.bad}</div>
  <div>all {props.bad + props.good + props.neutral}</div>
  <div>average {(props.bad * -1 + props.good * 1 + props.neutral * 0)/(props.bad + props.good + props.neutral)}</div>
  <div>positive {props.good/(props.bad + props.good + props.neutral) * 100} %</div> 
  </div>
  
}

const Button = (props) => {
  return <button onClick={props.handleClick}>
    {props.text}
  </button>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App