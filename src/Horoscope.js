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
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
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
        quote: "Fight for what you believe in. Go for it!"
      },
      taurus: {
        quote:
          "Don't be jealous this month. What's worse lookin, lookin' jealous or crazy?"
      },
      gemini: {
        quote:
          "To all the small-minded people around: replacing you is so easy. Live in the present, ignore the hate, and take each day as it comes."
      },
      cancer: {
        quote:
          "Introduce yourself to some new things, and upgrade you. Let your deep roots grow."
      },
      leo: {
        quote:
          "With a beautiful mane, you're the lion. Be brave not aggressive. Be kind, not cold-hearted."
      },
      virgo: {
        quote:
          "Sky-high standards will get you far. Remember that a diva is a female version of a hustler."
      },
      libra: {
        quote:
          "You're bigger than life. Get your name in the lights. You're the number one chick. I don't need no hype."
      },
      scorpio: {
        quote:
          "You're smart enough to make these millions, strong enough to bear the children, then get back to business. Who run the world? (You)"
      },
      sagittarius: {
        quote:
          "Did I mention? You need no permission. Don't pay him any attention. Remember that your value is irreplaceable."
      },
      capricorn: {
        quote:
          "Step up your confidence. Remember, you're the Queen of your hive."
      },
      aquarius: {
        quote: "Surf board! It's time to escape reality, take the vacation."
      },
      pisces: {
        quote: "Get drunk in love. Baby all night."
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
