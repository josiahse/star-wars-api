import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const Species = ({ dataArray, changeDisplayPage, changeDataArray }) => {
	useEffect(() => {
		changeDisplayPage('species');
	}, [changeDisplayPage]);
	const speciesJsx = dataArray.map((obj) => (
		<div className='cardBG'>
			<div className='infoCard' key={obj.name}>
				<h1>{obj.name}</h1>
				<p>
					<span>Classification: </span>
					{obj.classification}
				</p>
				<p>
					<span>Designation: </span>
					{obj.designation}
				</p>
				<p>
					<span>Language: </span>
					{obj.language}
				</p>
			</div>
		</div>
	));
		return (
			<main>
				<SearchBar page='species' changeDataArray={changeDataArray} />
				<div className='cards'>{speciesJsx}</div>
			</main>
		);
};

export default Species;
