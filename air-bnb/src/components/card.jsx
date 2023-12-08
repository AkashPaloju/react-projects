// import swimmer from "../images/swimmer.png";
import star from "../images/star.png";

function Card (props) {
  return(
    <div className="card">
    { props.quantity===0  && <div className="card-badge">SOLD OUT</div>}
      <div>
        <img className="card-img" src={props.img} alt="card-img"/>
      </div>
      <div className="card-stats">
        <img className="card-star-img" src={star} alt="star-img" />
        <span>{props.rating}</span>
        <span className="grey">({props.viewCount}) .</span>
        <span className="grey">{props.country}</span>
      </div>
      <p className="card-info">{props.info}</p>
      <p className="card-fee"><b>From ${props.fee}</b> / person</p>
    </div>
  )
}

export default Card ;