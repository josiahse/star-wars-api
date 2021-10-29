# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

This site polls the Star Wars API (link below) to render the most popular characters on the page. An additional Locations page shows some of the important planets in the saga, and there's a search bar to pull information about whatever character or location you'd like!

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

- Fetch Star Wars Characters for initial page load (first 6 or 12 characters)
- Fetch Stars Wars info for other pages on load
- Implement routes between the various pages page
- Search bar on each page

#### PostMVP

- Implement a generic search field for each 

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
| React structure | H | 2 hrs | -- |
| Passing Props | H | 4 hrs | -- |
| Routing | H | 2 hrs | -- |
| Working with API | H | 3hrs | -- |
| Bootstrap layout | H | 4hrs | -- |
| Search implementation | M | 2 hrs | -- |
| Generic Search pMVP work | L | 4 hrs |  
| Total | H | 24 hrs | 2.5 hrs |

## Additional Libraries

I'd like to use React Bootstrap for this project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
