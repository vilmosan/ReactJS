import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    let partTexts = [];
    let exerciseCounters = [];

    partTexts.push(part1, part2, part3);
    exerciseCounters.push(exercises1, exercises2, exercises3);

    return (
      <div>

          <Header courseText={course} />
          <Content partTexts = {partTexts} exerciseCounters={exerciseCounters} />
          <Total totalExercises = {exercises1 + exercises2 + exercises3} />

      </div>
    )
}

export default App