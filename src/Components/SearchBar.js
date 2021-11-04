import React, { useRef } from 'react';

const SearchBar = ({page, changeDataArray}) => {
	const inputRef = useRef();

  const checkPage = (page) => {
    switch (page) {
      case 'people':
        return 'character';
      case 'species':
        return page;
      default:
        return page.slice(0, -1)
    }
  }

	const searchAPI = (event) => {
		event.preventDefault();
		fetch(`https://swapi.dev/api/${page}/?search=${inputRef.current.value}`)
			.then((response) => response.json())
			.then((data) => changeDataArray(data.results));
	};

	return (
		<form onSubmit={searchAPI}>
			<input
				type='text'
				placeholder={`Search for a ${checkPage(page)}!`}
				name='search'
				ref={inputRef}
			/>
			<input type='submit' value='Search' />
		</form>
	);
};

export default SearchBar;


