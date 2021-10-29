import React, {useState, useEffect} from "react";

function App() {
  const [charInfo, setCharInfo] = useState({})

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response=>response.json())
    .then(data => setCharInfo(data));
  }, [])

  console.log(charInfo)

  return (
		<div className='App'>
			
		</div>
	);
}

export default App;
