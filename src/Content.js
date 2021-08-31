import React from 'react'
import Part from './Part'

const Content = ({content}) => {
	return (
		<div>
			{content.map(obj =>
				<Part key={obj.id} courseText={obj.name} courseExercises={obj.exercises}/>
			)}
		</div>
	)

}

export default Content