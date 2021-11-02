import React, { useEffect, useState } from 'react';

const Films = (props) => {
  	return (
		<div>
			<h1>{props.dataObj.title}</h1>
			<p>
				<span>Director: </span>
				{props.dataObj.director}
			</p>
			<p>
				<span>Producer: </span>
				{props.dataObj.producer}
			</p>
			<p>
				<span>Opening Crawl: </span>
				{props.dataObj.opening_crawl}
			</p>
		</div>
	);
};

export default Films;
