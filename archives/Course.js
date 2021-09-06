import React from 'react'
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
	const headerText = course.name;
	const content = course.parts;

	const exercisesArray = [];
	content.map(obj => exercisesArray.push(obj.exercises))

	const totalExercises = exercisesArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	})

	return (
		<>
			<Header headerText={headerText}/>
			<Content content={content}/>
			<Total totalExercises={totalExercises}/>

		</>
	)
}

export default Course