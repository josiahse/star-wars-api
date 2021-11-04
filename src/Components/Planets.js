import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const Planets = ({ dataArray, changeDisplayPage, changeDataArray }) => {
	useEffect(() => {
		changeDisplayPage('planets');
	}, [changeDisplayPage]);
	const planetsJsx = dataArray.map((obj) => (
		<div className='cardBG'>
			<div className='infoCard' key={obj.name}>
				<h1>{obj.name}</h1>
				<p>
					<span>Climate: </span>
					{obj.climate}
				</p>
				<p>
					<span>Diameter: </span>
					{obj.diameter}
				</p>
				<p>
					<span>Population: </span>
					{obj.population}
				</p>
				<p>
					<span>Orbital Period: </span>
					{obj.orbital_period}
				</p>
			</div>
		</div>
	));
	return (
		<main>
			<SearchBar page='planets' changeDataArray={changeDataArray} />
			<div className='cards'>{planetsJsx}</div>
		</main>
	);
};

export default Planets;
