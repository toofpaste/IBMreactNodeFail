import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetUser from './GetUser';
const personality = require('watson-personality')
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  username: '{username}',
  password: '{password}',
  url: '{url}'
});

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
    console.log(personalityProfile.needs)
  })
  .catch(function(error) {
    console.log(error)
  })


class App extends Component{
  render(){
  return (
    <div>
    <GetUser />
    </div>
  );
  }
}

export default App;
