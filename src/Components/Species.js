import React, { useEffect } from 'react';

const Species = ({ dataArray, changeDisplayPage }) => {
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
	return <div className='cards'>{speciesJsx}</div>;
};

export default Species;
