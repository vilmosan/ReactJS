import React, {useState, useEffect} from 'react'
import Button from "./Button";
import CountryDetailedView from "./CountryDetailedView";


const Country = ({country}) => {

	const handleClick = () => {
		console.log(country)
		setRendered();
		setRendered(<CountryDetailedView country={country}/>)
	}
	const [ rendered, setRendered ] = useState(<li>{country.name} <Button text={"View"} handleClick={handleClick}/></li>)

	return (
		<>
			{rendered}
		</>
	)

}

export default Country