import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

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
        <Header username={this.state.username} city={this.state.city} pincode={this.state.pincode} />
      </div>
    );
  }
}

export default App;
