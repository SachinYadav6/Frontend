import './card.css'
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="img" />
            <h2>{ props.heading || "No Title"}</h2>
            <p>{ props.p}</p>
            <button>{ props.button}</button>
        </div>
        
    )
}
export default Card;