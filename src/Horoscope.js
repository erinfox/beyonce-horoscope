import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './App.css'

//Horoscope view (JSX for horoscope goes here)
function Horoscopes(props){
	return (
	      <div></div>
	)
}

//Beyonce Welcome Horoscope Form (JSX for welcome form goes here)
function BeyWelcome(props){
     return(
	     <div className="welcome">
			<h1 className="header">Beyonce Horoscope Placeholder</h1>
			<div className="placeholder">Select Your Month and Day of Birth</div>
			
	     </div>
     )
}  

//AJAX request to JSON data API endpoint, returns data
function getHoroscopeData() {
	return fetch("JSON FILE NAME HERE")
		   .then(response => {
				if(response.status === 200){
					return Promise.resolve(response.json());
				}
			    else{
					return Promise.reject(new Error("error"));
			    }
			})
          .then(data => {
			    //add code here for parsing through data
				
			})
          .catch((error) => {
            console.warn(error);
            return null;
    });
   
}

//Horoscope component
class Horoscope extends Component {
	constructor(props){
				super(props);
				this.state={
					horoscope:""
				}
				
	}
	

	
	//change UI based on state
	render() {
		return (<BeyWelcome />)
      }
  }
   
export default Horoscope
