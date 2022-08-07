import React from 'react';


function Header(props) {
    return (
        <div style={Styles.header} className='header'>
            <span style={Styles.appname}>
                <span style={Styles.appname1} >Mr.</span>
                <span style={Styles.appname2} >Kart</span>
            </span>
            <span style={Styles.username}>
                <span style={Styles.username1}
                >Deliver to {props.username}</span>
                <span style={Styles.username2} ><img style={Styles.locationicon} src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1659739312~hmac=054bb2edacf226d9c47042d24d7f7dc8" alt="location" /> {props.city} {props.pincode}</span>
            </span>
            <span><input style={Styles.searchbar} type="search" name="Search" placeholder='Search Products...' id="" /></span>
            <span><img style={Styles.searchicon} className="searchicon" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="Searchicon" /></span>
            <span style={Styles.carticon} ><img style={Styles.carticonimage1} src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="" />
            <span style={Styles.carticonimage2} >3</span></span>
        </div>
    )


}
const Styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#888888e6',
        width: '100%',
        height: '3.5rem',
        color: 'white',
    },
    appname: {
        marginLeft: '1.5rem',
        marginTop: '.25rem'
    },
    appname1: {
        fontSize: '2rem',
        marginLeft: '0rem',
        fontFamily: 'BhuTuka Expanded One',
        position: 'relative',
        top: '-.1rem'
    },
    appname2: {
        fontSize: '2rem',
        marginLeft: '0rem',
        fontFamily: 'Exo:ital',
        fontWeight: '600'
    }, username: {
        fontFamily: 'arial',
        marginLeft: '1rem',
        marginTop: '.6rem',
        display: 'flex',
        flexDirection: 'column'
    }, username1: {
        fontFamily: 'arial',
        marginLeft: '0.2rem',
        fontSize: '.75rem'
    }, username2: {
        fontFamily: 'arial',
        marginLeft: '1rem',
        marginTop: '-.05rem'
    }, locationicon: {
        height: '17.5px',
        width: '17.5px'

    },
    searchbar: {
        fontFamily: 'arial',
        width: '32.5rem',
        height: '2.25rem',
        marginLeft: '6rem',
        marginTop: '.65rem',
        borderRadius: '.4rem',
        backgroundColor:'white',
        border:'white'
    },
    searchicon: {
        height: '30px',
        width: '30px',
        position: 'relative',
        top: '.9rem',
        left: '.5rem',
    },
    carticon:{
        marginTop:'.9rem',
        marginLeft:'20.5rem'
    },
    carticonimage1:{
        height:'30px',
        width:'30px',
    },
    carticonimage2:{
       padding:'.2rem',
       position:'relative',
       top:'-1.7rem',
       left:'-1.25rem',
       color:'black'
    }
}
export default Header;