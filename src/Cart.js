import React from 'react';

function Cart(props) {
    return (
        <div className="mobile-card">
            <div className="mobile-left">
                <img className='mobile-image' src={props.cart.img} alt="mobile" />
            </div>
            <div className="mobile-right">
                <div className="mobile-desc">
                    {props.cart.description}
                </div>
                <div className="mobile-price">
                    {props.cart.price}
                </div>
            </div>
        </div>
    )

}

export default Cart;