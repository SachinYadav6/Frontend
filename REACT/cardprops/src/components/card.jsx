
function Card(props) {
   
    return (
        <div className="card">
        <img src={props.src} />
            <h2>{ props.title}</h2>
            <p>{ props.text}</p>
        <button>view profile</button>
        </div>
    )
}
export default Card;