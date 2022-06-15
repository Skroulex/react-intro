import React, {useState} from 'react';

const Navbar = ({cars}) => {
    const [activeCard,setActiveCard] = useState("");
    // console.log(cars)
    return (
        <div style={{
            cursor: "pointer"
        }}>
            {cars.map(item => (
                <strong onClick={() => setActiveCard(item.id)} key={item.id} style={{margin: '10px',
                color: activeCard === item.id ? "black" : "grey",
                border: activeCard === item.id ? "2px solid black" : "none",
                padding: activeCard === item.id ? "5px" : "none"}}>{item.model}</strong>
            ))}
        </div>
    );
};

export default Navbar;
