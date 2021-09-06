import React, {useEffect, useState} from 'react'
import Countries from "./Countries";
import Filter from "./Filter";
import axios from "axios";
import CountryDetailedView from "./CountryDetailedView";

const App = () => {

	const [ countries, setCountries ] = useState([])
	const [ searchTerm, setSearchTerm ] = useState('')
	const [ filteredCountryList, setFilteredCountryList ] = useState([])
	let renderedList;

	const initCountries = () => {
		axios.get('https://restcountries.eu/rest/v2/all').then(response =>{
			setCountries(response.data);
		});
	}

	useEffect(initCountries,[]);

	const handleSearchInputChange = (event) => setSearchTerm(event.target.value);

	useEffect(() => {

		let tmpFilteredList = [];
		countries.forEach(p => {
			if (p.name.indexOf(searchTerm) >= 0){
				tmpFilteredList.push(p);
			}
		})
		setFilteredCountryList(tmpFilteredList);
	},[searchTerm]);

	if (filteredCountryList.length === 1){
		renderedList = <CountryDetailedView country={filteredCountryList[0]}/>
	} else if (filteredCountryList.length === 0){
		renderedList = `There are no countries containing the word "${searchTerm}".`
	} else if (filteredCountryList.length > 10){
		renderedList = `There are too many countries containing the word "${searchTerm}".`
	} else {
		renderedList = <Countries countries={filteredCountryList}/>
	}

	return (
		<div>
			<h2>Geography</h2>
			<div>
				<Filter label="Search a country:" onChange={handleSearchInputChange} value={searchTerm}/>
			</div>

			<h3>Countries:</h3>
			{renderedList}
		</div>
	)
}

export default App