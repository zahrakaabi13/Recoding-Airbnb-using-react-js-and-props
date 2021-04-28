import Carte from './Carte'

const chezVous = [
    {titre :'Escapades en pleine nature' , image : "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"},
    {titre :'Des logements uniques' , image : "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"},
    {titre :'Logement entiers' , image : "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"},
    {titre :'Animeaux de compagnie acceptés' , image : "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"}
]


function ChezVous(){
    return (
        <div className="container">
        <h1 className="title--vous ml-2">Chez vous, pourtant</h1>
        <div className="chez-vous mt-4">
        {chezVous.map(element =>
        <div>
            <Carte titre = {element.titre} img = {element.image}/>
        </div>
        )
        }
        </div>
        </div>
    )
}
export default ChezVous