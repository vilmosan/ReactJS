import React from 'react'
import Person from "./Person";

const Phonebook = ({phonebook}) => {
	return (
		<>
			<ul>
				{
					phonebook.map(person =>
						<Person key={person.name} person={person}/>
					)
				}
			</ul>
		</>
	)

}

export default Phonebook