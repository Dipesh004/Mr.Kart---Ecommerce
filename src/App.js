import React from 'react';
import './App.css';
import Mobiles from './Mobiles';
import Laptops from './Laptops';

class App extends React.Component {

  constructor() {
    // const mobiledata1={mobiledata}
    super();
    this.state = {
      username: 'Dipesh',
      city: 'Faridabad',
      pincode: '121006',
      showproducts: false,
      showactiveproducts: false,
      mobiles:[{description:'APPLE iphone 12 mini(64GB, Purple)',price:'42,099/-',img:'https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mobile/d/h/5/iphone-12-mini-mjqh3hn-a-apple-original-imag2k2xuuyfyusd.jpeg?q=70'},
      {description:'APPLE iphone 12(64GB, Black)',price:'52,999/-',img:'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70'},
      {description:'APPLE iphone 11(64GB, Midnight-Green)',price:'45,000/-',img:'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70'},
      {description:'APPLE iphone 13 mini(64GB, White)',price:'60,000/-',img:'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/j/u/iphone-13-mini-mlkc3hn-a-apple-original-imag6vp6swvmsbnn.jpeg?q=70'},
      {description:'APPLE iphone 13(64GB, Starlight)',price:'75,000/-',img:'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70'},
      {description:'APPLE iphone 13 Pro(128GB, Silver)',price:'1,20,000/-',img:'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70'},
      {description:'APPLE iphone 13 Pro Max(512GB, Silver)',price:'1,50,000/-',img:'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/c/g/4/iphone-13-pro-max-mlll3hn-a-apple-original-imag6vpg3r7dyvhm.jpeg?q=70'}],
      laptops:[{description:'APPLE 2020 Macbook Air M1 - (8 GB/512 GB SSD/Mac OS Big Sur) MGN73HN/A',price:'1,09,990/-',img:'https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70'},
      {description:'APPLE 2021 Macbook Pro M1 Max - (32 GB/1 TB SSD/Mac OS Monterey) MK1A3HN/A',price:'3,09,990/-',img:'https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70'},
      {description:'APPLE 2022 MacBook Pro M2 - (8 GB/256 GB SSD/Mac OS Monterey) MNEH3HN/A',price:'1,20,000/-',img:'https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/r/6/b/macbook-pro-thin-and-light-laptop-apple-original-imagfdeu9rmugapt.jpeg?q=70'},
      {description:'APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A',price:'1,19,990/-',img:'https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/a/b/i/macbook-air-thin-and-light-laptop-apple-original-imagfdf4xnbyyxpa.jpeg?q=70'},
      {description:'APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS Monterey) MNEJ3HN/A',price:'1,42,990/-',img:'https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/r/6/b/macbook-pro-thin-and-light-laptop-apple-original-imagfdeu9rmugapt.jpeg?q=70'},
      {description:'APPLE MacBook Air M1 - (16 GB/512 GB SSD/Mac OS Big Sur) Z124J006KD',price:'1,20,000/-',img:'https://rukminim1.flixcart.com/image/312/312/kyt0ya80/computer/i/d/p/na-thin-and-light-laptop-apple-original-imagaygvtvf6cx8h.jpeg?q=70'},
      {description:'APPLE 2021 Macbook Pro M1 Max - (32 GB/1 TB SSD/Mac OS Monterey) MK1H3HN/A',price:'1,30,000/-',img:'https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70'}],
      cartstate:[]
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
