import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Garage extends Component {
  render() {
    return (
      <div className="garage-container">
        <div className="garage-bg">
          <img className="logo-img" src="../../assets/images/logo.png" alt="" />
        </div>
        <div className="garage-description">
          <h3>{this.props.garage}</h3>
          <p>Nous avons la meilleur voiture de votre vie ! ... et aussi ta mère !</p>
          <Link to="/garages/new" className="link">
            <div className="btn-content">
              <button className="btn-car">Add a car</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}


export default Garage;
