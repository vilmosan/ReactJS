import React, {useEffect, useState} from 'react'
import axios from "axios";

const CountryDetailedView = ({country}) => {
	const [ flagUrl, setFlagUrl ] = useState(`https://restcountries.eu/data/${country.alpha3Code.toLowerCase()}.svg`)
	const [ temperatureIconUrl, setTemperatureIconUrl ] = useState('')
	const [ temperatureData, setTemperatureData ] = useState([])
	const api_key = process.env.REACT_APP_API_KEY

	const fetchWeather = () => {
		axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`).then(response => {
			console.log(response.data.current);
			setTemperatureData(response.data.current);
			setTemperatureIconUrl(response.data.current.weather_icons)
		});
	}


	useEffect(fetchWeather,[]);



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
			<h3>Weather in {country.capital}:</h3>
			<div>
				<span>Temperature: <strong>{temperatureData.temperature} °C</strong></span>
			</div>
			<img src={temperatureIconUrl} alt="temperatureIcon"/>
		</>
	)

}

export default CountryDetailedView