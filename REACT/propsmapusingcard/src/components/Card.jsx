
function Card(props) {
    console.log(props);
    
   
    return (
        <div className="card">
        <img src={props.img} />
            <h2>{ props.h2}</h2>
            <p>{ props.text}</p>
            <button>{ props.button}</button>
        </div>
    )
}
export default Card;