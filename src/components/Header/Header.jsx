import React from 'react';

const Header = ({logo}) => {
    console.log(logo)
    return (
        <div>
            <img src={logo} width={'200px'} alt=""/>
        </div>
    );
};

export default Header;
