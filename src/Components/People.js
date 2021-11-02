import React, { useEffect, useState } from 'react';

const People = (props) => {
	const [dataArray, setDataArray] = useState(null);

	useEffect(() => {
		Promise.all([
			fetch(`${props.dataObj.homeworld}`),
			props.dataObj.species[0] 
        ? fetch(`${props.dataObj.species[0]}`) 
        : 'Human',
			props.dataObj.starships[0]
				? fetch(`${props.dataObj.starships[0]}`)
				: 'None',
			props.dataObj.vehicles[0]
				? fetch(`${props.dataObj.vehicles[0]}`)
				: 'None',
		])
			.then((responses) => {
				return Promise.all(
					responses.map((response) => {
						return response.ok ? response.json() : response;
					})
				);
			})
			.then((data) => setDataArray(data));
	}, []);

	console.log(dataArray);

	return (
		<div>
			<h1>{props.dataObj.name}</h1>
			<p>
				<span>Home World: </span>
				{dataArray && dataArray[0].name}
			</p>
			<p>
				<span>Species: </span>
				{dataArray && (dataArray[1].name ? dataArray[1].name : dataArray[1])}
			</p>
			<p>
				<span>Starship: </span>
				{dataArray && (dataArray[2].name ? dataArray[2].name : dataArray[2])}
			</p>
			<p>
				<span>Vehicle: </span>
				{dataArray && (dataArray[3].name ? dataArray[3].name : dataArray[3])}
			</p>
		</div>
	);
};

export default People;
