import React, { Component } from 'react'
import { AddCart, actFetchProductRequest } from '../../actions';
import { connect } from 'react-redux';


export class Products extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.actFetchProductsRequest();
    }

    render() {
        const {_products} = this.props._products;
        if(_products.length > 0){


            return (
              <div className='wrapper'>
                <div className='container'>
                    <div className='products'>
                        {
                            _products.map((item,index)=>(
                                <div key={index} className='product-container'>
                                    <img src={item.image} className='image'/>
                                    <h5>{item.name}</h5>
                                    <button className='btn' onClick={()=>this.props.AddCart(item)}>Add cart</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
              </div>  
            )
        }

        return(
            <div className='load'>
                <h2>Loading...</h2>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
       _products: state._todoProduct, 
    };
}

function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductRequest()),
        AddCart:item=>dispatch(AddCart(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);