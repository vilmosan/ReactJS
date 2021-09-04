import React, {useEffect, useState} from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Course from './Course'
import Person from './Person'
import Phonebook from "./Phonebook";
import Filter from "./Filter";
import PersonForm from "./PersonForm";

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', phone: '040-123456' },
		{ name: 'Ada Lovelace', phone: '39-44-5323523' },
		{ name: 'Dan Abramov', phone: '12-43-234345' },
		{ name: 'Mary Poppendieck', phone: '39-23-6423122' }
	])
	const [ newName, setNewName ] = useState('')
	const [ newPhone, setNewPhone ] = useState('')
	const [ searchTerm, setSearchTerm ] = useState('')
	const [ filteredPersonList, setFilteredPersonList ] = useState([])
	const [showAll, setShowAll] = useState(true)

	const addContact = (event) => {
		event.preventDefault()

		if(nameValidator(newName)){
			const personObject = {
				id: persons.length + 1,
				name: newName,
				phone: newPhone,
			}

			setPersons(persons.concat(personObject))
			setNewName('')
			setNewPhone('')
		} else {
			alert(`${newName} is already added to phonebook!`)
		}

	}

	let renderedList;

	const handleNameInputChange = (event) => setNewName(event.target.value);
	const handlePhoneInputChange = (event) => setNewPhone(event.target.value);
	const handleSearchInputChange = (event) => setSearchTerm(event.target.value);

	useEffect(() => {
		searchTerm.length > 0 ? setShowAll(false) : setShowAll(true)
		let tmpFilteredList = [];
		persons.forEach(p => {
			if (p.name.indexOf(searchTerm) >= 0){
				tmpFilteredList.push(p);
			}
		})
		setFilteredPersonList(tmpFilteredList);
	},[searchTerm]);

	const nameValidator = (name) => {
		let validName = true;
		persons.forEach(person => {
			if(person.name === name){
				validName = false;
			}
		})
		return validName
	}

	renderedList = showAll ? <Phonebook phonebook={persons}/> : <Phonebook phonebook={filteredPersonList}/>

	return (
		<div>
			<h2>Phone Book</h2>
			<div>
				<Filter label="Search name:" onChange={handleSearchInputChange} value={searchTerm}/>
			</div>
			<h3>Add new contact</h3>
			<PersonForm addContact={addContact} nameValue={newName} nameChange={handleNameInputChange} phoneValue={newPhone} phoneChange={handlePhoneInputChange}/>

			<h3>Numbers</h3>
			{renderedList}
		</div>
	)
}

/*const App = (props) => {
	console.log(props);
	const [ persons, setPersons ] = useState(props.phonebook)
	const [ newPerson, setNewPerson ] = useState('')

	const addContact = (event) => {
		event.preventDefault()
		const personObject = {
			name: newPerson,
			id: persons.length + 1,
		}

		setPersons(persons.concat(personObject))
		setNewPerson('')
	}
	const handlePersonChange = (event) => {
		console.log(event.target.value)
		setNewPerson(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addContact}>
				<div>
					<p>Name:</p>
					<input
						value={newPerson}
						onChange={handlePersonChange}/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map(person =>
					<Person key={person.id} person={person}/>
				)}
			</ul>
		</div>
	)*/

	// << -- Part 1 Exercises -- >> //
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

	// const anecdotes = [
	// 	'If it hurts, do it more often',
	// 	'Adding manpower to a late software project makes it later!',
	// 	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	// 	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	// 	'Premature optimization is the root of all evil.',
	// 	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	// 	'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
	// ]
	// const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
	//
	// const [selected, setSelected] = useState(0)
	// const [mostLikedIndex, setMostLikedIndex] = useState(0)
	//
	// const [good, setGood] = useState(0)
	// const [neutral, setNeutral] = useState(0)
	// const [bad, setBad] = useState(0)
	// let statTexts = [];
	// let statCounters = [];
	// statTexts.push("Good:", "Neutral:", "Bad:");
	// statCounters.push(good, neutral, bad);
	//
	// const increaseGood = () => setGood(good + 1)
	// const increaseNeutral = () => setNeutral(neutral + 1)
	// const increaseBad = () => setBad(bad + 1)
	// const randomizeAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
	// const likeAnecdote = () => {
	// 	let pointsCopy = [...points];
	// 	pointsCopy[selected] += 1
	// 	setPoints(pointsCopy);
	//
	// 	let sorted = [...pointsCopy].sort((a,b) => b - a)
	// 	setMostLikedIndex(pointsCopy.indexOf(sorted[0]));
	// }

	/*return (
		<div>

			{/!*<Header courseText={course} />*!/}
			{/!*<Content partTexts = {partTexts} exerciseCounters={exerciseCounters} />*!/}
			{/!*<Total totalExercises = {exercises1 + exercises2 + exercises3} />*!/}

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
	)*/

	// << -- Part 2 Exercises -- >> //
	// const courses = [
	// 	{
	// 		name: 'Half Stack application development',
	// 		id: 1,
	// 		parts: [
	// 			{
	// 				name: 'Fundamentals of React',
	// 				exercises: 10,
	// 				id: 1
	// 			},
	// 			{
	// 				name: 'Using props to pass data',
	// 				exercises: 7,
	// 				id: 2
	// 			},
	// 			{
	// 				name: 'State of a component',
	// 				exercises: 14,
	// 				id: 3
	// 			},
	// 			{
	// 				name: 'Redux',
	// 				exercises: 11,
	// 				id: 4
	// 			}
	// 		]
	// 	},
	// 	{
	// 		name: 'Node.js',
	// 		id: 2,
	// 		parts: [
	// 			{
	// 				name: 'Routing',
	// 				exercises: 3,
	// 				id: 1
	// 			},
	// 			{
	// 				name: 'Middlewares',
	// 				exercises: 7,
	// 				id: 2
	// 			}
	// 		]
	// 	}
	// ]
	// return (
	// 	<div>
	// 		{courses.map(course =>
	// 			<Course key={course.id} course={course}/>
	// 		)}
	// 	</div>
	// )

export default App