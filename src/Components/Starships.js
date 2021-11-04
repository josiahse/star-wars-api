import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const Starships = ({dataArray, changeDisplayPage, changeDataArray}) => {
    useEffect(() => {
			changeDisplayPage('starships');
		}, [changeDisplayPage]);
  const starhipsJsx = dataArray.map((obj) => (
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
					<span>Hyperdrive Rating: </span>
					{obj.hyperdrive_rating}
				</p>
			</div>
		</div>
	));
	return (
		<main>
			<SearchBar page='starships' changeDataArray={changeDataArray} />
			<div className='cards'>{starhipsJsx}</div>
		</main>
	);
};

export default Starships;
