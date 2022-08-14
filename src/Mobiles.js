import React from 'react';

function Mobiles(props) {
    return (
        <div className="mobile-card">
            <div className="mobile-left">
                <img src="" alt="mobile" />
            </div>
            <div className="mobile-right">
                <div className="mobile-desc">
                    {props.mobile.description}
                </div>
                <div className="mobile-price">
                    {props.mobile.price}
                </div>
            </div>
        </div>
    )

}

export default Mobiles;