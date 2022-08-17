import React from 'react';

function Cart(props) {
    return (
        <div className="cart-card">
            <div className="cart-left">
                <img className='cart-image' src={props.cart.img} alt="cart" />
            </div>
            <div className="cart-right">
                <div className="cart-desc">
                    {props.cart.description}
                </div>
                <div className="cart-price">
                    Rs. {props.cart.price}/- 
                </div>
                <div className="cart-qty">
                    Quantity -{props.cart.qty}
                </div>
                <button className='cart-delete' onClick={()=>{props.onDeleteFromCart(props.cart)}} >Remove</button>
            </div>
        </div>
    )

}

export default Cart;