import Card from "./Card"

const CardPage = (props) => {
    const cards = props.dataArray.map((obj) => {
        return <Card dataObj={obj} page={props.page}/>
    })
    
    return cards
}

export default CardPage;