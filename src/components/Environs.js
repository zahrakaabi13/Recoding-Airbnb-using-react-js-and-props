import EnvironsChild from './EnvironChild'

const Regions = [
    {name :'Tunis', description :'Temps de trajet: 15min', image : 'https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240'},
    {name :'Marsa', description :'Temps de trajet: 30min', image : 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'},
    {name :'Kelibia', description :'2 heures de route', image : 'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'},
    {name :'Yasmine Hammamet', description :'1 heure de route', image : 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240'},
    {name :'Hammamet Sud', description :'1 heure de route', image : 'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240'},
    {name :'Hergla', description :'1,5 heure de route', image : 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240'},
    {name :'Korba', description :'1,5 heure de route', image : 'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240'},
    {name :'Aghir', description :'8 heures de route', image : 'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240'},
]


function Environs(){
    return(
     <div className="container exp-environs">
       <h1 className="ml-3">Explorez les environs</h1>
       <div className="container cities my-4">
        {Regions.map(element => 
            <div>
                <EnvironsChild img = {element.image} title ={element.name} desc ={element.description}/>
            </div>
            )
        }
        </div>
        </div>
    )
}
export default Environs