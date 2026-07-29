import './Card.css'
function Card(props) {
  return (
    <div className="single-card">
      <img src={props.img} alt="" />
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Card;