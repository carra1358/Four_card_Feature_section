function Card ({title,textContent,iconSource}: CardProps) {
    
  

    return (
        <div className="Card_container">
                 <h3>{title}</h3>
                 <p>{textContent}</p>
            <div>
                <img src={iconSource} alt={iconSource} />

            </div>
        </div>
    )
}

type CardProps = {
    title : string;
    textContent : string,
    iconSource: string;

}


export default Card;