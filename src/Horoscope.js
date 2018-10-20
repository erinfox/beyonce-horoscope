import React, { Component } from "react";
// import ReactDOM from "react-dom";

import "./App.css";

class Horoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    console.log("this.handleSubmit");
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }

  handleChange(event) {
    console.log("this.handleChange");

    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <BeyWelcome
        isSubmitted={this.state.isSubmitted}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

function BeyWelcome(props) {
  return (
    <div className="welcome">
      <h1 className="header">Beyonce Horoscope</h1>
      <div className="placeholder">Select your zodiac sign</div>
      <Form
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        value={props.value}
      />
      {props.isSubmitted && (
        <p>
          <DisplayHoroscopes value={props.value} />
        </p>
      )}
    </div>
  );
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Select your zodiac sign" };
  }
  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <select value={value} onChange={handleChange}>
            <option value="lol">Pick your zodiac</option>
            <option value="aires">Aires</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="corpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function DisplayHoroscopes(props) {
  let zodiacObject = {
    signs: {
      aries: {
        quote: "sdflkjsdlkfjsdljf"
      }
    }
  };
  return (
    <div>
      <p>{zodiacObject.signs[props.value].quote}</p>
    </div>
  );
}

export default Horoscope;
