import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import App from './Components/App';
import './styles.css';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);
