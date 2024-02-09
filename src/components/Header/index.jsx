import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'




export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "home"
        };
    }

    handleMenuClick = (menu) => {
        this.setState({ menu });
    }

    render() {
        const { menu } = this.state;
        return (
            <div className='container'>
                <div className='nav-logo'>
                    <i>Logo</i>
                    <p>Style</p>
                </div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li onClick={() => this.handleMenuClick("home")} className='nav-item'>
                            <Link to="/" className={`nav-link ${menu === "home" ? "active" : ""}`}>
                                Home
                            </Link>
                            {menu === "home" ? <hr /> : null}
                        </li>

                        <li onClick={() => this.handleMenuClick("products")} className='nav-item'>
                            <Link to="/products" className={`nav-link ${menu === "products" ? "active" : ""}`}>
                                Products
                            </Link>
                            {menu === "products" ? <hr /> : null}
                        </li>
                    </ul>
                    <div className='nav-cart'>
                        <Link to="/cart">
                            <i></i>
                        </Link>
                        <div className='nav-cart-count'>{this.props.numberCart}</div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numberCart: state._todoProduct.numberCart
    };
};

export default connect(mapStateToProps, null)(Header);

