function Card(props) {
    return (
        <div className="card">
            <img src={props.link} alt="" />
            <h1>{ props.heading}</h1>
            <p>{ props.p}</p>
            <button>{ props.button}</button>
        </div>
    )
}
export default Card;
