import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";

//Beyonce Welcome Horoscope Form (JSX for welcome form goes here)
// title + welcome text + select form + submit button
function BeyWelcome(props) {
  return (
    <div className="welcome">
      <h1 className="header">Beyonce Horoscope Placeholder</h1>
      <div className="placeholder">Select Your Month and Day of Birth</div>
    </div>
  );
}

// once the subit is hit, call the data here
//AJAX request to JSON data API endpoint, returns data
function getHoroscopeData() {
  return fetch("JSON FILE NAME HERE")
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject(new Error("error"));
      }
    })
    .then(data => {
      //add code here for parsing through data
    })
    .catch(error => {
      console.warn(error);
      return null;
    });
}

// take data and return displayHoroscope

//Horoscope view (JSX for horoscope goes here)
function displayHoroscopes(props) {
  return <div />;
}

//Horoscope component
//everything is rendered here
class Horoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horoscope: ""
    };
  }

  //change UI based on state
  render() {
    return <BeyWelcome />;
    //return displayHoroscopes
  }
}

export default Horoscope;
