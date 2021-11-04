import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const People = ({ dataArray, changeDisplayPage, changeDataArray }) => {
  useEffect(() => {
		changeDisplayPage('people');
	}, [changeDisplayPage]);
	const peopleJsx = dataArray.map((obj) => (
		<div className='cardBG'>
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
		</div>
	));

	return (
		<main>
			<SearchBar page='people' changeDataArray={changeDataArray} />
			<div className='cards'>{peopleJsx}</div>
		</main>
	);
};

export default People;
