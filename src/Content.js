import React from 'react';
import Mobileitem from './Mobileitem';
import Laptopitem from './Laptopitem';

function Content(props) {
    return (
        <div className='content' >
            <div style={Styles.mobiles} className="mobiles">
                <div style={Styles.headingmobile} ><h2 style={Styles.headingmobile1} >Mobiles</h2></div>
                <div style={Styles.mobileitem} > <Mobileitem /><Mobileitem /><Mobileitem /><Mobileitem /><Mobileitem /></div>
            </div>
            <div style={Styles.laptops} className="laptops">
            <div style={Styles.headinglaptop} ><h2 style={Styles.headinglaptop1} >Laptops</h2></div>
                <div style={Styles.laptopitem} ><Laptopitem /><Laptopitem /><Laptopitem /></div>
            </div>
            <div className="beauty">

            </div>
            <div className="appliances">

            </div>
            <div className="clothing">

            </div>
        </div>
    );
}
const Styles = {
    mobiles: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column'
    },
    headingmobile: {
        fontFamily: 'arial',
        height: 'Auto'
    },
    headingmobile1: {
        fontFamily: 'arial',
        marginLeft: '-75rem',
        border: '.12rem solid #888888e6',
        height: 'Auto'
    },
    mobileitem:{
        display:'flex',
        flexDirection:'row'
    },
    laptops: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column'
    },
    headinglaptop: {
        fontFamily: 'arial',
        height: 'Auto'
    },
    headinglaptop1: {
        fontFamily: 'arial',
        marginLeft: '-75rem',
        border: '.12rem solid #888888e6',
        height: 'Auto'
    },
    laptopitem:{
        display:'flex',
        flexDirection:'row'
    }
}
export default Content;