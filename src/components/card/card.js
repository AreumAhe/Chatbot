import "./card.css"

const Card = ({ title, content, image, onClick }) => {

    // const handleClick=()=>{
    //     window.open(url);
    // }

    return(
        <div className="card" onClick={onClick}>
            {image && <img src={ image } alt="card-visual" className="card-image"></img>}
            <div className="card-body"> 
                <h3 className="card-title">{ title }</h3>
                <p className="card-content">{ content }</p>
            </div>
        </div>
    )
}

export default Card;