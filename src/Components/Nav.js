import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<nav>
      <h1 className='title'><Link to="/">Star Wars Info</Link></h1>
			<ul className="navList">
				<li>
					<Link to='/People'>People</Link>
				</li>
				<li>
					<Link to='/Films'>Films</Link>
				</li>
				<li>
					<Link to='/Planets'>Planets</Link>
				</li>
				<li>
					<Link to='/Species'>Species</Link>
				</li>
				<li>
					<Link to='/Starships'>Starships</Link>
				</li>
				<li>
					<Link to='/Vehicles'>Vehicles</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
