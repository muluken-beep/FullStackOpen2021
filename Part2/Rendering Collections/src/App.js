import React, { useState } from 'react'

const StatisticLine = ({text, value}) =>{
  return (
      <td>{text} {value}</td>         
    )    
  }


const Statistics = ({good, bad, neutral, all, average, positive}) => {
   if(bad===0 && good===0 && neutral===0){
    return<div>
    <div>No feedback given</div>
    </div>
  } 
  return <div>
  <table>
    <tbody>
        <tr><StatisticLine text="good" value={good}/></tr>
        <tr><StatisticLine text="neutral" value={neutral}/></tr>
        <tr><StatisticLine text="bad" value={bad}/></tr>
        <tr><StatisticLine text="all" value={all}/></tr>
        <tr><StatisticLine text="average" value={average}/></tr>
        <tr><StatisticLine text="positive" value={positive + '%'}/></tr>          
   </tbody>
   </table>
  </div>  
}


const Button = ({handleClick, text}) => {
  return (
   <button onClick={handleClick}>
    {text}
  </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>
      setGood(good + 1)

  const handleBadClick = () =>
       setBad(bad + 1)
      
  const handleNeutralClick = () =>
       setNeutral(neutral + 1)

  const all = good + bad + neutral
  const average =  ((good-bad)/all) 
  const positive = (good / all) * 100
       

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>    
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all = {all} average ={average} positive={positive }/>
    </div>
  )
}

export default App