import React, { useEffect } from 'react';

const Films = ({ dataArray, changeDisplayPage }) => {
  useEffect(() => {
		changeDisplayPage('films');
	}, [changeDisplayPage]);

	const filmsJsx = dataArray.map((obj) => (
		<div className='infoCard' key={obj.episode_id}>
			<h1>{obj.title}</h1>
			<p>
				<span>Director: </span>
				{obj.director}
			</p>
			<p>
				<span>Producer: </span>
				{obj.producer}
			</p>
			<p>
				<span>Opening Crawl: </span>
				{obj.opening_crawl}
			</p>
		</div>
	));

	return <div className='cards'>{filmsJsx}</div>;
};

export default Films;
