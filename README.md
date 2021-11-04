# Project Overview

## Project Links

- [Github Repo](https://github.com/josiahse/star-wars-api)
- [add your deployment link](https://josiahse.github.io/star-wars-api/#/)

## Project Description

This site polls the Star Wars API (link below) to render the some Star Wars characters on the page. Additional pages show info for various planets, vehicles, films, etc. You can search on each page for a character or vehicle that's not shown.

## API

[Star Wars API](https://swapi.dev/)

```
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/7/"
	],
	"species": [
		"https://swapi.dev/api/species/1/"
	],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1635530600/star%20wars%20api%20project/wireframe.png)
- [React Structure](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1635530798/star%20wars%20api%20project/react_structure_xg5oz2.jpg)

#### MVP

- Fetch Star Wars Characters for initial page load (first 6 characters)
- Fetch Stars Wars info for other pages on load
- Implement routes between the various pages page
- Search bar on each page

#### PostMVP

- Implement a generic search field for each -- not yet done, see code snippets below for how I believe this would need to be implemented given the API I am working with.

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.
| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| Header | This will render the header include the nav |
| About | Basic about page |
| Card Page* | Displays cards grid, Header, and search bar| 
| Card | the cards on the grid|
| Info** | renders info inside the card |
| Search Page | show the results of the search |

*will use props/routes to switch the contents of what's rendering appropriately.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: |
| Initial Design and API test | H | 3hrs| 2.5 hrs |
| React structure | H | 2 hrs | 4 hrs |
| Passing Props | H | 4 hrs | 4 hrs |
| Routing | H | 2 hrs | 2 hrs |
| Working with API | H | 3 hrs | 14 hrs |
| Bootstrap layout | H | 4hrs | n/a |
| Search implementation | M | 2 hrs | 2 hrs |
| Generic Search pMVP work | L | 4 hrs | n/a |  
| Total | H | 24 hrs | 28.5 hrs |

## Additional Libraries

I was planning on using React Bootstrap for this project but working with the API took significantly longer than expected so I only applied some basic CSS to the project to get it at least semi-presentable.

## Code Snippet

I don't have time to update the search functionality to be a universal search for every page given my React Architecture (I believe I'd have to restructure my components to better fit this search). But I believe this is how the API call would need to be done given the API I am working with, which has a separate search field for each of the 6 categories.

```
Promise.all([
	fetch(`https://swapi.dev/api/people/?search=${inputRef.current.value}`),
	fetch(`https://swapi.dev/api/films/?search=${inputRef.current.value}`),
	fetch(`https://swapi.dev/api/species/?search=${inputRef.current.value}`),
	fetch(`https://swapi.dev/api/vehicles/?search=${inputRef.current.value}`),
	fetch(`https://swapi.dev/api/starships/?search=${inputRef.current.value}`),
	fetch(`https://swapi.dev/api/planets/?search=${inputRef.current.value}`),
])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(data => changeDataArray(data.filter(obj => obj.results[0])));
```

This CSS to both angle the corners of the cards and get a border around the full perimeter of the cards took a bit of doing but I'm happy with how it turned out.

```
.cardBG {
	filter: drop-shadow(1px 0px 0px #18e9f7) drop-shadow(-1px 0px 0px #18e9f7)
		drop-shadow(0px 1px 0px #18e9f7) drop-shadow(0px -1px 0px #18e9f7)
		drop-shadow(1px 1px 0px #18e9f7) drop-shadow(-1px -1px 0px #18e9f7)
		drop-shadow(-1px 1px 0px #18e9f7) drop-shadow(1px -1px 0px #18e9f7);
}

.infoCard {
	background-color: black;
	padding: 5%;
  text-align: center;
	max-width: 350px;
	clip-path: polygon(
		0 10%,
		10% 0,
		90% 0,
		100% 10%,
		100% 90%,
		90% 100%,
		10% 100%,
		0% 90%,
		0% 10%
	);
}
```