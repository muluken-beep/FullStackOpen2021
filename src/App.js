import React from "react";

const Header = (props) => {  
  return(
    <>
      <p>{props.course}</p>
    </>
  )
}


const Part1 = (props) =>{
  return(
   <>
    <p>{props.firstPart} {props.value1}</p>    
   </>
  )
}

const Part2= (props) =>{
  return(
   <>
    <p>{props.secondPart} {props.value2}</p>    
   </>
  )
}


const Part3= (props) =>{
  return(
   <>
    <p>{props.thirdPart} {props.value3}</p>    
   </>
  )
}




const Total = (props) =>{
  return(
      <>
      <p>Number of exercises {props.total}</p>
      </>
  )
}


const App = () => {
 const course = 'Half stack application development'
 const part1 = 'Fundamentals of React'
 const exercise1 = 10
 const part2 = 'Using props to pass data'
 const exercise2 = 7
 const part3 = 'State of a component'
 const exercise3 = 14
  return (
    <div>
      <Header course={course}/>
      <Part1 firstPart={part1} value1={exercise1}/>
      <Part2 secondPart={part2} value2={exercise2}/> 
      <Part3 thirdPart={part3} value3={exercise3}/>          
      <Total total={exercise1 + exercise2 + exercise3}/>   
    </div>
  );
}

export default App;
