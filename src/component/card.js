export default function Card(props) {
    return( 
        <div className="card">
           <img className="card-img" src={props.img} />
        <div className="card-main">
           <div className="card-stats">
            <img src="../images/location.png" width="19px" height="19px"/>
            <h5 className="card-place">{props.place}</h5>
            <a className="card-map" href={props.map}><u>View on Google Map</u></a>
           </div>
           <h1 className="card-name">{props.placeName}</h1>
           <h4 className="card-date">{props.placeDate}</h4>
           <p className="card-title">{props.describe}</p>
        </div>
        </div>
    )
}