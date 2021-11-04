import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

const Films = ({ dataArray, changeDisplayPage, changeDataArray }) => {
	useEffect(() => {
		changeDisplayPage('films');
	}, [changeDisplayPage]);

	const filmsJsx = dataArray.map((obj) => {
		const releaseDate = new Date(obj.release_date);

    const releaseDateArray = releaseDate.toDateString().slice(4).split(' ')
    const dateString = [releaseDateArray[1], releaseDateArray[0], releaseDateArray[2]].join(' ')

		return (
			<div className='cardBG'>
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
						<span>Release Date: </span>
						{dateString}
					</p>
				</div>
			</div>
		);
	});

	return (
		<main>
			<SearchBar page="films" changeDataArray={changeDataArray} />
			<div className='cards'>{filmsJsx}</div>
		</main>
	);
};

export default Films;