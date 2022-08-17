import React from 'react';

function Mobiles(props) {
    return (
        <div className="mobile-card">
            <div className="mobile-left">
                <img className='mobile-image' src={props.mobile.img} alt="mobile" />
            </div>
            <div className="mobile-right">
                <div className="mobile-desc">
                    {props.mobile.description}
                </div>
                <div className="mobile-price">
                     Rs. {props.mobile.price}/-
                </div>
                <button className='add-to-cart' onClick={()=>{props.onAddToCart(props.mobile)}} >Add To Cart</button>
            </div>
        </div>
    )

}

export default Mobiles;