import React from 'react';

function Laptops(props){
    return(
        <div className="laptop-card">
            <div className="laptop-left">
                <img className='laptop-image' src={props.laptop.img} alt="laptop" />
            </div>
            <div className="laptop-right">
                <div className="laptop-desc">
                    {props.laptop.description}
                </div>
                <div className="laptop-price">
                    Rs. {props.laptop.price}/-
                </div>
                <button className='add-to-cart' onClick={()=>{props.onAddToCart(props.laptop)}}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Laptops;