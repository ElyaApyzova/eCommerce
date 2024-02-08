import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <nav className='nav'>
                        <ul className='list'>
                            <li className='list-item'><Link to="/" className="list-link active">Home</Link></li>
                            <li className='list-item'><Link to="/products" className="list-link">Products</Link></li>
                            <li className='list-item'><Link to="/carts" className="list-link">Carts : {this.props.numberCart}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}