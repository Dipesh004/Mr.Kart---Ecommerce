import React from 'react';
import './App.css';
import Mobiles from './Mobiles';
import Laptops from './Laptops';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'Dipesh',
      city: 'Faridabad',
      pincode: '121006',
      showproducts: false,
      showactiveproducts: false,
      mobiles:[{description:'APPLE iphone 12 mini(64GB, Purple)',price:'42,099/-'},{description:'APPLE iphone 12(64GB, Black)',price:'52,999/-'},
      {description:'APPLE iphone 11(64GB, Midnight-Green)',price:'45,000/-'},
      {description:'APPLE iphone 13 mini(64GB, White)',price:'60,000/-'},
      {description:'APPLE iphone 13(64GB, White)',price:'75,000/-'},
      {description:'APPLE iphone 13 Pro(128GB, White)',price:'90,000/-'},
      {description:'APPLE iphone 13 Pro Max(256GB, White)',price:'1,15,000/-'}],
      laptops:[{description:'APPLE iphone 12 mini(64GB, Purple)',price:'42,099/-'},{description:'APPLE iphone 12(64GB, Black)',price:'52,999/-'},
      {description:'APPLE iphone 11(64GB, Midnight-Green)',price:'45,000/-'},
      {description:'APPLE iphone 13 mini(64GB, White)',price:'60,000/-'},
      {description:'APPLE iphone 13(64GB, White)',price:'75,000/-'},
      {description:'APPLE iphone 13 Pro(128GB, White)',price:'90,000/-'},
      {description:'APPLE iphone 13 Pro Max(256GB, White)',price:'1,15,000/-'}]
    }
  }
  handleClickMovies = () => {
    this.setState({ showproducts: true, showactiveproducts: true })
  }
  handleClickFavourites = () => {
    this.setState({ showproducts: false, showactiveproducts: false })
  }

  render() {
    return (
      <div className="app">
        <div className='main'>
          <div className='tabs'>
            <button className={this.state.showactiveproducts ? 'active-tab' : 'tab'} onClick={this.handleClickMovies} >Products</button>
            <button className={this.state.showactiveproducts ? 'tab' : 'active-tab'} onClick={this.handleClickFavourites}>Cart</button>
          </div>
          <div className='list' >
          {this.state.showproducts
            ? <div> <div className='mobiles-list'>
            {this.state.mobiles.map((mobile,index)=>{
              return( <Mobiles key={index} mobile={mobile} />  )
            })}</div>
            <div className='laptops-list'>
            {this.state.laptops.map((laptop,index)=>{
              return( <Laptops key={index} laptop={laptop} />  )
            })}</div></div>
            : <div className='list'>Cart is showing

             </div>}
             </div>
        </div>
      </div>
    );
  }
}

export default App;
