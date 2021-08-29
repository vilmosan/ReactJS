import React, {useEffect, useState} from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
	// const course = 'Half Stack application development'
	// const part1 = 'Fundamentals of React'
	// const exercises1 = 10
	// const part2 = 'Using props to pass data'
	// const exercises2 = 7
	// const part3 = 'State of a component'
	// const exercises3 = 14
	// let partTexts = [];
	// let exerciseCounters = [];
	//
	// partTexts.push(part1, part2, part3);
	// exerciseCounters.push(exercises1, exercises2, exercises3);

	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
	]
	const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

	const [selected, setSelected] = useState(0)
	const [mostLikedIndex, setMostLikedIndex] = useState(0)

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	let statTexts = [];
	let statCounters = [];
	statTexts.push("Good:", "Neutral:", "Bad:");
	statCounters.push(good, neutral, bad);

	const increaseGood = () => setGood(good + 1)
	const increaseNeutral = () => setNeutral(neutral + 1)
	const increaseBad = () => setBad(bad + 1)
	const randomizeAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
	const likeAnecdote = () => {
		let pointsCopy = [...points];
		pointsCopy[selected] += 1
		setPoints(pointsCopy);

		let sorted = [...pointsCopy].sort((a,b) => b - a)
		setMostLikedIndex(pointsCopy.indexOf(sorted[0]));
	}

	return (
		<div>

			{/*<Header courseText={course} />*/}
			{/*<Content partTexts = {partTexts} exerciseCounters={exerciseCounters} />*/}
			{/*<Total totalExercises = {exercises1 + exercises2 + exercises3} />*/}

			<h2>Anecdote of the day:</h2>
			<div>
				{anecdotes[selected]}
			</div>
			<div>
				This anecdote has {points[selected]} likes so far.
			</div>

			<Button handleClick={likeAnecdote} text="Like"/>
			<Button handleClick={randomizeAnecdote} text="Next anecdote"/>

			<h2>Anecdote with the most votes:</h2>
			<div>
				{anecdotes[mostLikedIndex]}
			</div>


			<h2>Give feedback:</h2>
			<Button handleClick={increaseGood} text="Good"/>
			<Button handleClick={increaseNeutral} text="Neutral"/>
			<Button handleClick={increaseBad} text="Bad"/>
			<h2>Statistics:</h2>
			<Statistics statTexts={statTexts} statCounters={statCounters}/>
		</div>
	)
}

export default App