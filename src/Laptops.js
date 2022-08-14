import React from 'react';

function Laptops(props){
    return(
        <div className="laptop-card">
            <div className="laptop-left">
                <img src="" alt="laptop" />
            </div>
            <div className="laptop-right">
                <div className="laptop-desc">
                    {props.laptop.description}
                </div>
                <div className="laptop-price">
                    {props.laptop.price}
                </div>
            </div>
        </div>
    )
}

export default Laptops;