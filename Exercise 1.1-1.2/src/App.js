import React from "react";

const Header = (props) => {  
  return(
    <>
      <p>{props.course}</p>
    </>
  )
}


const Part= (props) =>{
  return(
   <div>
    <p>
      {props.part} {props.exercises}
    </p>    
   </div>
  )
}



const Content= (props) =>{
  return(
   <div>
   <Part part={props.part1} exercises={props.exercise1}/>
   <Part part={props.part2} exercises={props.exercise2}/>
   <Part part={props.part3} exercises={props.exercise3}/>
   </div>
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
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>          
      <Total total={exercise1 + exercise2 + exercise3}/>   
    </div>
  );
}

export default App;
