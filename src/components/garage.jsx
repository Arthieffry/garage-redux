import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Garage extends Component {
  changeLink = () => {
    if (window.location.pathname === '/') {
      return this.displayLink("/cars/new", "Add a Car");
    } {
      return this.displayLink("/", "Return to Listcar");
    }
  }

  displayLink = (path, text) => {
    return (
      <Link to={path} className="link">
        <div className="btn-content">
          <button className="btn-car">{text}</button>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div className="garage-container">
        <div className="garage-bg">
          <img className="logo-img" src="../../assets/images/logo.png" alt="" />
        </div>
        <div className="garage-description">
          <h3>{this.props.garage}</h3>
          <p>We have the best car of your life.... !!</p>
          {this.changeLink()}
        </div>
      </div>
    );
  }
}


export default Garage;
