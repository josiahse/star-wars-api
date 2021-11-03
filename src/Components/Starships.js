import React, { useEffect } from 'react';

const Starships = ({dataArray, changeDisplayPage}) => {
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
	return <div className='cards'>{starhipsJsx}</div>;
};

export default Starships;
