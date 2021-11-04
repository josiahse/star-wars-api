import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const Vehicles = ({ dataArray, changeDisplayPage, changeDataArray }) => {
	useEffect(() => {
		changeDisplayPage('vehicles');
	}, [changeDisplayPage]);
	const vehicleJsx = dataArray.map((obj) => (
		<div className='cardBG'>
			<div className='infoCard' key={obj.name}>
				<h1>{obj.name}</h1>
				<p>
					<span>Manufacturer: </span>
					{obj.manufacturer}
				</p>
				<p>
					<span>Model: </span>
					{obj.model}
				</p>
				<p>
					<span>Crew: </span>
					{obj.crew}
				</p>
				<p>
					<span>Type: </span>
					{obj.vehicle_class}
				</p>
			</div>
		</div>
	));

	return (
		<main>
			<SearchBar page='vehicles' changeDataArray={changeDataArray} />
			<div className='cards'>{vehicleJsx}</div>
		</main>
	);
};

export default Vehicles;
