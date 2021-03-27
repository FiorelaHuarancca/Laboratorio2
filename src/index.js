import React from 'react'
import ReactDOM from 'react-dom'
import Header from ',/Header.js'
import Content from ',/Content.js'
import Total from ',/Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: "Fundamentals of React",
    exercises1 : 10
  }

  const part2 = {
    name: "Using props to pass data",
    exercises2 : 7
  }

  const part3 = {
    name: "State of a component",
    exercises3 : 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={part1, part2, part3}/>
      <Total exercise={exercises1, exercises2, exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))