import React from 'react'

const PersonForm = (props) => {
	return (
		<>
			<form onSubmit={props.addContact}>
				<div>
					<p>Name:</p>
					<input
						value={props.nameValue}
						onChange={props.nameChange}/>
				</div>
				<div>
					<p>Phone number:</p>
					<input
						value={props.phoneValue}
						onChange={props.phoneChange}/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
		</>
	)

}

export default PersonForm