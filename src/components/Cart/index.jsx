import React from 'react';



function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){

    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price,sum){
        return Number(price * sum).toLocaleString('en-US')
    }

    return(
        <div className='wrapper'>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          ListCart.map((item,key) => {
                            return(
                                <tr key={key}>
                                  <td></td>  
                                </tr>
                            )
                          })  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}