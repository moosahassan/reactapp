import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Followers from '../followers/Followers';
import MonthlyIncome from '../monthlyincome/MonthlyIncome';
import YearlyIncome from '../yearlyincome/YearlyIncome';
import Weather from '../weather/Weather';
import Section from '../section/Section';
import NewVisitors from '../newvisitors/NewVisitors';
import BounceRate from '../bouncerate/BounceRate';
import Searches from '../searches/Searches';
import Traffic from '../traffic/Traffic';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="row">
          <div className="col-sm-3"><Followers/></div>
          <div className="col-sm-3"><MonthlyIncome/></div>
          <div className="col-sm-3"><YearlyIncome/></div>
          <div className="col-sm-3" id="weather"><Weather/></div>
        </div>
        <div className="row">
          <div className="col-9">
            <Section/>
            <Section/>
          </div>
          <div className="col-3">
            <div className="container-fluid" id="sidebar">
              <NewVisitors/>
              <BounceRate/>
              <Searches/>
              <Traffic/>
            </div>
          </div>
        </div>









      </div>
    );
  }
}

export default App;
