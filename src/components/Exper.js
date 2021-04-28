import { propTypes } from "react-bootstrap/esm/Image"

import {Card} from 'react-bootstrap'

function Exper(props){
    return(
        <div>
            <Card className="carte--Exp px-2">
                <Card.Img className="img--exp" variant="top" src={props.img} />
                <Card.Body className="body mt-2">
                    <Card.Title className="title--exp">{props.title}</Card.Title>
                    <Card.Text className="desc--exp">{props.desc}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Exper