const Species = (props) => {
	return (
		<div>
			<h1>{props.dataObj.name}</h1>
			<p>
				<span>Classification: </span>
				{props.dataObj.classification}
			</p>
			<p>
				<span>Designation: </span>
				{props.dataObj.designation}
			</p>
			<p>
				<span>Language: </span>
				{props.dataObj.language}
			</p>
		</div>
	);
};

export default Species;
