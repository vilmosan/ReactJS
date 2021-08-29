import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({statTexts, statCounters}) => {

	if (statCounters[0] === 0 && statCounters[1] === 0 && statCounters[2] === 0){
		return (
			<div>
				<p>No feedback given.</p>
			</div>
		)
	}
	const allFeedbacks = statCounters[0] + statCounters[1] + statCounters[2];
	const averageScore = (statCounters[0] - statCounters[2]) / allFeedbacks;
	const positiveFeedbackPercentage = statCounters[0] / allFeedbacks * 100;

	return (
		<div>
			<table>

				<tbody>
				<tr>
					<StatisticLine statText={statTexts[0]} statCounter={statCounters[0]}/>
				</tr>
				<tr>
					<StatisticLine statText={statTexts[1]} statCounter={statCounters[1]}/>
				</tr>
				<tr>
					<StatisticLine statText={statTexts[2]} statCounter={statCounters[2]}/>
				</tr>
				<tr>
					<StatisticLine statText="All:" statCounter={allFeedbacks}/>
				</tr>
				<tr>
					<StatisticLine statText="Average score:" statCounter={averageScore}/>
				</tr>
				<tr>
					<StatisticLine statText="Positive feedback percentage:" statCounter={positiveFeedbackPercentage}/>
				</tr>
				</tbody>
			</table>
		</div>
	)

}

export default Statistics