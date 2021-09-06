import React, {useState} from 'react'

const CountryDetailedView = ({country}) => {

	const [ flagUrl, setFlagUrl ] = useState(`https://restcountries.eu/data/${country.alpha3Code.toLowerCase()}.svg`)

	return (
		<>
			<h2>{country.name}</h2>
			<div>
				<span>Capital: <strong>{country.capital}</strong></span>
			</div>
			<div>
				<span>Population: <strong>{country.population}</strong></span>
			</div>
			<h3>Most common languages:</h3>
			<ul>
				{country.languages.map((language) =>  <li key={language.name}>{language.name}</li>)}
			</ul>
			<div>
				<img width={'400px'} border={'1px black'} src={flagUrl} alt="flag"/>
			</div>
		</>
	)

}

export default CountryDetailedView