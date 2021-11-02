const Planets = (props) => {
	return (
		<div>
			<h1>{props.dataObj.name}</h1>
			<p>
				<span>Climate: </span>
				{props.dataObj.climate}
			</p>
			<p>
				<span>Diameter: </span>
				{props.dataObj.diameter}
			</p>
			<p>
				<span>Population: </span>
				{props.dataObj.population}
			</p>
			<p>
				<span>Orbital Period: </span>
				{props.dataObj.orbital_period}
			</p>
		</div>
	);
};

export default Planets;
