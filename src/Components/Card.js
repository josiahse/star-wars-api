import People from './People';
import Films from './Films';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const Card = (props) => {
	const checkPage = (page) => {
		switch (page) {
			case 'people':
				return <People dataObj={props.dataObj} />;
			case 'films':
				return <Films dataObj={props.dataObj} />;
			case 'planets':
				return <Planets dataObj={props.dataObj} />;
			case 'species':
				return <Species dataObj={props.dataObj} />;
			case 'starships':
				return <Starships dataObj={props.dataObj} />;
			case 'vehicles':
				return <Vehicles dataObj={props.dataObj} />;
			default:
				return <h1>Error</h1>;
		}
	};

	const cardJsx = <div className='infoCard'>{checkPage(props.page)}</div>;
	return cardJsx;
};

export default Card;
