import React from 'react';

function Mobileitem(props){
    return(
        <div style={Styles.mobileitem} className='mobileitem' >
            <div className="image">
                <img style={Styles.mobileimage} src="https://images.unsplash.com/photo-1605546960353-838f65ae5823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="Mobileimage" />
            </div>
            <div style={Styles.titlemobileitem} >
               <p>APPLE iphone 12 Mini (Midnight Green, 64 GB)</p>  
            </div>
            <div style={Styles.descmobileitem} >
                <p style={Styles.descmobileitem1} >~ 64 GB Rom</p>
                <p style={Styles.descmobileitem1} >~ 5.4 inch Super Retina Display</p>
                <p style={Styles.descmobileitem1} >~ Ceramic Shield</p>
            </div>
            <div style={Styles.addtocart} className="addtocart">
                <button>Add to Cart</button>
            </div>
        </div>
    );
}
const Styles={mobileitem:{
    display:'flex',
    flexDirection:'column',
    marginLeft:'1rem'
},
mobileimage:{
    width:'100px'
},
titlemobileitem:{
    fontFamily:'arial',
    fontSize:'1rem'
},
descmobileitem:{
    fontFamily:'arial',
    marginTop:'-1rem'
},
descmobileitem1:{
    fontFamily:'arial',
    fontSize:'.9rem',
    marginBottom:'-1rem'
},
addtocart:{
    marginTop:'1.2rem',
    marginBottom:'-1rem'
}}
export default Mobileitem;