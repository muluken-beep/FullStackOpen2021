import React from 'react'

const Header = ({name}) => {
  return(
      <h1>
          {name}
      </h1>
  )
}

const Content = ({ parts }) => {
  const eachCourse = parts.map(e =>
      <Part
          key={ e.id }
          part = { e }
      />
  );

  return(
      <ul>
          { eachCourse }
      </ul>
  )
}

const Part = ({ part }) => {
  return(
      <li>
          { part.name } { part.exercises }
      </li>
  )
}

const Total = ({ parts }) => {
  const total =  parts.reduce((a, b) => {
      return { exercises: a.exercises + b.exercises }
  });

  return(
      <p>
          Total of exercises: { total.exercises }
      </p>
  )
}

const Course = ({ course }) => {
  return (
      <div>
          <Header
              name = { course.name }
          />
          <Content
              parts = { course.parts }
          />
          <Total
              parts = { course.parts }
          />
      </div>
  )
}


const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return <Course course={course} />
  }

export default App