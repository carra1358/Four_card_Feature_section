import "./cards.scss"

function Card({ title, borderColor, textContent, iconSource }: CardProps) {



    return (
        <div className="card_container">
            <div className={`card_text ${borderColor}`}>
                <h3 >{title}</h3>
                <p>{textContent}</p>
            </div>
            <div className="card_img">
                <img src={iconSource} alt={iconSource} />

            </div>
        </div>
    )
}

type CardProps = {
    title: string;
    textContent: string,
    iconSource: string,
    borderColor: string,
}


export default Card;