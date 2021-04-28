import {Card} from 'react-bootstrap'

function Carte(props){
    return (
        <div className="mx-2">
            <Card className="card-vous">
                <Card.Img className="img-vous" variant="top" src={props.img} alt=""/>
                <Card.Body>
                    <Card.Title className="text">{props.titre}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Carte