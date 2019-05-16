import React from 'react';

function NavBar({ navbar }) {
    const navbarString = navbar.join(' | ') 
    return(
        <div>
            <div className="title">
                <i className=" y-icon fab fa-y-combinator"></i>
                <h3 className="main-title">Hacker News</h3>
                <div>{navbarString}</div>
            </div>

        </div>    
    )
}

export default NavBar;