import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Items from './Items'
import DetailItem from './DetailItem'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <div className="background animated slideInDown">
                </div>
                <Sidebar/>
                    <Route exact path="/" component={Items} />
                    <Route  path="/item/:name" component={DetailItem} />
            </div>

        </Router>
    );
  }
}

export default App;
