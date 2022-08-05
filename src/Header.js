import React from 'react';


function Header() {
    return (
        <div style={Styles.header} className='header'>
            <span style={Styles.appname}>
                <span style={Styles.appname1} >Mr.</span>
                <span style={Styles.appname2} >Kart</span>
            </span>
            <span><input style={Styles.searchbar} type="search" name="Search" placeholder='Search Products...' id="" /></span>
            <span><img style={Styles.searchicon} className="searchicon" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="Searchicon" srcset="" /></span>
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
        marginLeft: '1.25rem',
        marginTop:'.25rem'
    },
    appname1: {
        fontSize: '2rem',
        marginLeft: '2rem',
        fontFamily: 'BhuTuka Expanded One',
        position: 'relative',
        top: '-.1rem'
    },
    appname2: {
        fontSize: '2rem',
        marginLeft: '0rem',
        fontFamily: 'Exo:ital',
        fontWeight: '600'
    },
    searchbar: {
        fontFamily: 'arial',
        width: '32.5rem',
        height: '2.25rem',
        marginLeft: '14rem',
        marginTop: '.65rem',
        borderRadius:'.4rem'
    },
    searchicon:{
        height:'30px',
        width:'30px',
        position:'relative',
        top:'.9rem',
        left:'.5rem'
    }
}
export default Header;