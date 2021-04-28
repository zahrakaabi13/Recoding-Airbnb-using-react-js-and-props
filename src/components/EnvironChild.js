function EnvironsChild(props){
    return (
        <div className="container-fluid">
            <a className="row environ--child mb-3" href="https://www.airbnb.fr/s/Tunis/homes?place_id=ChIJQ_V-Xn8z_RIRdQJKcU6ScdY&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation">
                    <div className="">
                    <img src={props.img} alt="photo of Tunis"/>
                    </div>
                    <div className="parag ml-3 my-2">
                    <h1>{props.title}</h1>
                    <p className="parag">{props.desc}</p>
                    </div>
            </a>
            </div>
    )
}
export default EnvironsChild