import React from 'react';

function Laptopitem(props){
    return(
        <div style={Styles.laptopitem} className='laptopitem' >
            <div className="image">
                <img style={Styles.laptopimage} src="https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="Laptopimage" />
            </div>
            <div style={Styles.titlelaptopitem} >
               <p>ACER Aspire 7 (Grey, 16 GB)</p>  
            </div>
            <div style={Styles.desclaptopitem} >
                <p style={Styles.desclaptopitem1} >~ 16 GB DDR4 RAM</p>
                <p style={Styles.desclaptopitem1} >~ 512 GB SSD</p>
                <p style={Styles.desclaptopitem1} >~ 1 Year International travelers Warranty</p>
            </div>
            <div style={Styles.addtocart} className="addtocart">
                <button>Add to Cart</button>
            </div>
        </div>
    );
}
const Styles={laptopitem:{
    display:'flex',
    flexDirection:'column',
    marginLeft:'1rem'
},
laptopimage:{
    width:'100px'
},
titlelaptopitem:{
    fontFamily:'arial',
    fontSize:'1rem'
},
desclaptopitem:{
    fontFamily:'arial',
    marginTop:'-1rem'
},
desclaptopitem1:{
    fontFamily:'arial',
    fontSize:'.9rem',
    marginBottom:'-1rem'
},
addtocart:{
    marginTop:'1.2rem',
    marginBottom:'-1rem'
}}
export default Laptopitem;