import React, { useEffect } from 'react';

const People = ({ dataArray, changeDisplayPage }) => {
  useEffect(() => {
		changeDisplayPage('people');
	}, [changeDisplayPage]);
	const peopleJsx = dataArray.map((obj) => (
		<div className='infoCard' key={obj.name}>
			<h1>{obj.name}</h1>
			<p>
				<span>Birth Year: </span>
				{obj.birth_year}
			</p>
			<p>
				<span>Gender: </span>
				{obj.gender}
			</p>
			<p>
				<span>Hair Color: </span>
				{obj.hair_color}
			</p>
			<p>
				<span>Eye Color: </span>
				{obj.eye_color}
			</p>
		</div>
	));

	return <div className='cards'>{peopleJsx}</div>;
};

export default People;
