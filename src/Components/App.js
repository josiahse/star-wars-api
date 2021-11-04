import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import People from './People';
import Films from './Films';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Nav from './Nav';

function App() {
	const [displayPage, setDisplayPage] = useState('people');
	const [dataArray, setDataArray] = useState([]);

	useEffect(() => {
		fetch(`https://swapi.dev/api/${displayPage}/`)
			.then((response) => response.json())
			.then((data) => setDataArray(data.results.slice(0, 6)));
	}, [displayPage]);

	const changeDisplayPage = (page) => {
		setDisplayPage(page);
	};

	const changeDataArray = (array) => {
		setDataArray(array);
	};

	return (
		<div className='App'>
			<Nav />
			<Route
				exact
				path='/'
				render={() => (
					<People
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
			<Route
				exact
				path='/People'
				render={() => (
					<People
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
			<Route
				exact
				path='/Films'
				render={() => (
					<Films dataArray={dataArray} changeDisplayPage={changeDisplayPage} />
				)}></Route>
			<Route
				exact
				path='/Planets'
				render={() => (
					<Planets
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
			<Route
				exact
				path='/Species'
				render={() => (
					<Species
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
			<Route
				exact
				path='/Starships'
				render={() => (
					<Starships
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
			<Route
				exact
				path='/Vehicles'
				render={() => (
					<Vehicles
						dataArray={dataArray}
						changeDisplayPage={changeDisplayPage}
						changeDataArray={changeDataArray}
					/>
				)}></Route>
		</div>
	);
}

export default App;
