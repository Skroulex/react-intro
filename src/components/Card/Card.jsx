import React, {useState} from 'react';
import "./Card.css"

const Card = ({item, activeCard, setActiveCard}) => {
    // console.log
    const [like,setLike] = useState(false)
    return (
        <div style={{
            border: activeCard === item.id ? "2px solid black" : "none",
            padding: "50px"
        }} onClick={() => setActiveCard(item.id)}>
            <h2>{item.model}</h2>
            <div>
                <img className="car-image" src={item.image} alt=""/>
            </div>
            <div>
                {like ? (
                    <img
                        onClick={() => setLike(!like)}
                        alt="like"
                        width="50px"
                        src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/like-19.png"
                    />
                ) : (
                    <img
                        onClick={() => setLike(!like)}
                        alt="like"
                        width="50px"
                        src="https://icons.veryicon.com/png/o/application/foundation-icon-1/like-13.png"
                    />
                )}
            </div>
        </div>
    );
};

export default Card;
