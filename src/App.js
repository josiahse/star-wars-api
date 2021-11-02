import React, { useState, useEffect } from 'react';
import CardPage from './Components/CardPage'

function App() {
	const [displayPage, setDisplayPage] = useState('starships');
	const [dataArray, setDataArray] = useState([]);

	const indexArray = [1, 2, 3, 4, 5, 6];

	useEffect(() => {
		Promise.all(
			indexArray.map((i) => {
				return fetch(`https://swapi.dev/api/${displayPage}/${i}/`);
			})
		).then((responses) => {
			return Promise.all(
				responses.map(response => response.json())
			);
		}).then(data => setDataArray(data));
	}, [displayPage]);

  console.log(dataArray)

	return <div className='App'>
    <CardPage setDisplayPage={setDisplayPage} dataArray={dataArray} page={displayPage}/>
  </div>;
}

export default App;
