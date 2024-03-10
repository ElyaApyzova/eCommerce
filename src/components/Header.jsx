import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
     <div className="header">
        <div className="container">
            <div className="inner__header">
                <nav className="menu">
                 <ul className="menu__list">
                    <li className="list__item">
                        <Link>Home</Link>
                    </li>
                    <li className="list__item">
                        <Link>Product</Link>
                    </li>
                    <li className="list__item">
                        <Link>Contact</Link>
                    </li>
                 </ul>
                </nav>
            </div>
            </div>
     </div>
    )
}

export default Header;