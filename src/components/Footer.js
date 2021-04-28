import {Container, Row, Col} from 'react-bootstrap'


const firstlist =["Fonctionnement d'Airbnb", "Newsroom", "Investisseurs", "Airbnb Plus", "Airbnb Luxe" , "HotelTonight", "Airbnb for Work", "C'est possible, grâce aux hôtes", "Carrières", "Lettre des fondateurs"]

const secondlist = ["Diversité et intégration", "Accessibilité", "Partenaires Airbnb", "Logements d'urgence", "Parrainage de voyageurs", "Airbnb.org"]

const thisrdlist = ["Héberger des voyageurs", "Organiser une expérience en ligne", "Organiser une expérience", "Accueil responsable", "Centre de ressources", "Community Center"]

const forthlist =["Nos mesures face au COVID-19", "Centre d'aide", "Options d'annulation", "Service d'aide aux voisins", "Confiance et sécurité"]


function List(props){
    return (
        <div>
            <Container>
                <Row className="css--text">
                   <Col md={3}>
                   <h2>À PROPOS</h2>
                   {props.listee1.map(element=>
                       <ul>
                           <li>{element}</li>
                       </ul>
                       )
                   }
                  </Col>

                  <Col md={3}>
                  <h2>COMMUNAUTÉ</h2>
                   {props.listee2.map(element=>
                       <ul>
                           <li>{element}</li>
                       </ul>
                       )
                   }
                  </Col>

                  <Col md={3}>
                  <h2>HÔTE</h2>
                   {props.listee3.map(element=>
                       <ul>
                           <li>{element}</li>
                       </ul>
                       )
                   }
                  </Col>

                  <Col md={3}>
                  <h2>ASSISTANCE</h2>
                   {props.listee4.map(element=>
                       <ul>
                           <li>{element}</li>
                       </ul>
                       )
                   }
                  </Col>

                </Row>
                <hr/>
                <div className="">
                    <p>© 2021 Airbnb, Inc.
                    <br/>Confidentialité·   Conditions générales·   Plan du site·  Fonctionnement du site·   Infos sur l'entreprise</p>
                </div>
            </Container>
        </div>
    )
}


function Footer(){
    return (
        <div className="footer pt-5 mt-5">
            <List listee1 = {firstlist} listee2 ={secondlist} listee3 ={thisrdlist} listee4 ={forthlist}/>
        </div>
    )
}
export default Footer