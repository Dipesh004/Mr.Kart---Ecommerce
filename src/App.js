import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'Dipesh',
      city: 'Faridabad',
      pincode: '121006'
    }
  }
  render() {
    return (
      <div className="App">
        <div style={Styles.header} ><Header username={this.state.username} city={this.state.city} pincode={this.state.pincode} /></div>
        <div><Content/></div>
      </div>
    );
  }
}
const Styles={
  header:{
    position:'sticky',
    top:'0rem'
  }
}
export default App;
