import React, { useEffect } from 'react';

const Films = ({ dataArray, changeDisplayPage }) => {
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
					<div className='height-setter'></div>
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

	return <div className='cards'>{filmsJsx}</div>;
};

export default Films;