function Card(props) {
    return (
        <div className="card">
            <img src={ props.img} alt="" />
            <h1>{ props.heading}</h1>
            <p>{ props.p}</p>
            <button>{props.btn}</button>
        </div>
    )
}
export default Card;
