import React, { Component } from 'react';
import './App.css';
import Items from './Items'
import DetailItem from './DetailItem'
import Exercise2 from './Exercise2'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <div className="background animated slideInDown"></div>
                <Route exact path="/" component={Items} />
                <Route  path="/item/:name" component={DetailItem} />
                <Route  exact path="/exercise2" component={Exercise2} />
            </div>
        </Router>
    );
  }
}

export default App;
