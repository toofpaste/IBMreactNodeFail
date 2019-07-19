import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetUser from './GetUser';
const personality = require('watson-personality')
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const express = require('express');
const app = express();
require('./router')(app);
module.exports = app;
// const personalityInsights = new PersonalityInsightsV3({
//   version: '2017-10-13',
//   iam_apikey: '1rL0qaf0W1vCMjaydmTZwmzFxeq9WKVnFWyMVW3RLpUZ',
//   url: 'https://gateway-syd.watsonplatform.net/personality-insights/api',
//   iam_access_token: '1617031982-W1pe4vVRoGpfGpAV0CaVcQMlyY3ZohPPrCa0Frb',
//   iam_client_id: 'vKf8ENoJtsqTsZutPpHmRf16m',
//     iam_client_secret: 'W8HiWmN7o9aLN6KVMJSeHkcwoL024dkz4uBA8xW6KH25ttN8xk'


// });
// console.log(personalityInsights._options);

// personalityInsights.profileAsCsv('@billyzacsmith')
//   .then(function(personalityProfile) {
//     console.log(personalityProfile.traits)
//     console.log(personalityProfile.needs)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })


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
