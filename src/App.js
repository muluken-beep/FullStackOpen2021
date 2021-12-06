import React from "react";

const Hello = (props) => {
return(
  <div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
)
}


const App = () => {
  const name = 'peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
     <Hello name= 'maya' age={10 + 26}/>    
     <Hello name = {name}  age={age}/>    
     </>
  );
}

export default App;
