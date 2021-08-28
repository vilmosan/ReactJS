import React from 'react'
import Part from './Part'

const Content = (props) => {

	console.log(props.partTexts);
	return (
		<div>
			<Part partText={props.partTexts[0]} exerciseCounter={props.exerciseCounters[0]}/>
			<Part partText={props.partTexts[1]} exerciseCounter={props.exerciseCounters[1]}/>
			<Part partText={props.partTexts[2]} exerciseCounter={props.exerciseCounters[2]}/>
		</div>
	)

}

export default Content