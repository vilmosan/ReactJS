import React from 'react'

const Filter = ({label, onChange, value}) => {

	return (
		<>
			<p>{label}</p>
			<input
				value={value}
				onChange={onChange}/>
		</>
	)

}

export default Filter