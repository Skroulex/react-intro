import React from 'react';
import Navbar from "../Navbar/Navbar";

const Header = ({logo, cars}) => {
    // console.log(cars)
    return (
        <div style={{
            display : "flex",
            justifyContent : "space-between",
            alignItems: "center"
        }}>
            <img src={logo} width={'200px'} alt=""/>
            <Navbar cars={cars} />
        </div>
    );
};

export default Header;
