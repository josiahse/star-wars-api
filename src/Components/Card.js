import People from "./People";
import Films from "./Films";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";

const Card = (props) => {
    const obj = props.dataObj
    console.log(obj)
    const checkPage = (page) => {
        switch (page) {
            case 'people':
                return <People dataObj={obj} />
                break;
            case 'films':
                return <Films dataObj={obj} />
                break;
            case 'planets':
                return <Planets dataObj={obj} />
                break;
            case 'species':
                return <Species dataObj={obj} />
                break;
            case 'starships':
                return <Starships dataObj={obj} />
                break;
            default:
                return <h1>Error</h1>
        }
    }

    const cardJsx = <div className="infoCard">
        {checkPage(props.page)}
    </div>
    return cardJsx
}

export default Card;