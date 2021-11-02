import React, { useEffect } from 'react';

const Planets = ({ dataArray, changeDisplayPage }) => {
	useEffect(() => {
		changeDisplayPage('planets');
	}, [changeDisplayPage]);
	const planetsJsx = dataArray.map((obj) => (
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
	));
	return <div className='cards'>{planetsJsx}</div>;
};

export default Planets;
