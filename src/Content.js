import React from 'react'
import StatisticLine from './StatisticLine'

const Content = (props) => {

	console.log(props.partTexts);
	return (
		<div>
			<StatisticLine partText={props.partTexts[0]} exerciseCounter={props.exerciseCounters[0]}/>
			<StatisticLine partText={props.partTexts[1]} exerciseCounter={props.exerciseCounters[1]}/>
			<StatisticLine partText={props.partTexts[2]} exerciseCounter={props.exerciseCounters[2]}/>
		</div>
	)

}

export default Content