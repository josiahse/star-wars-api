import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<ul>
			<li>
				<Link to='/People' >
					People
				</Link>
			</li>
			<li>
				<Link to='/Films' >
					Films
				</Link>
			</li>
			<li>
				<Link to='/Planets' >
					Planets
				</Link>
			</li>
			<li>
				<Link to='/Species' >
					Species
				</Link>
			</li>
			<li>
				<Link to='/Starships' >
					Starships
				</Link>
			</li>
			<li>
				<Link to='/Vehicles' >
					Vehicles
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
