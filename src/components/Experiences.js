import Exper from './Exper'


const Exp = [
    {title : 'Collection à la une : Envies évasion', desc: 'Voyagez depuis chez vous grâce aux expériences en ligne.', image : 'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320'},
    {title : 'Expériences en ligne', desc: 'Activités interactives en direct, animées par des hôtes.', image : 'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320'},
    {title : 'Expériences', desc: 'Prenez part à des activités locales, où que vous soyez.', image : 'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320'},
]


function Experiences(){
    return (
        <div className="container exp--text">
        <h1>Découvrez les expériences</h1>
        <p>Des activités uniques avec des experts locaux, en personne ou en ligne.</p>
        <div className="Exp">
        {Exp.map(element =>
            <Exper title = {element.title} desc= {element.desc} img = {element.image} />
            )
        }
        </div>
        </div>
    )
}
export default Experiences