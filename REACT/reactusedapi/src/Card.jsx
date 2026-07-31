function Card(props) {

    return (
        <div className="card">
            <img src={props.img} width="120px" />
            <h1>{props.title}</h1>
        </div>
    )
}
export default Card;