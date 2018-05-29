import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div className="cars-card">
        <img src="../../assets/images/lewagon.png" alt="" className="car-img" />
        <div className="car-content">
          <h5>{this.props.car.brand} - {this.props.car.model}</h5>
          <p><span className="bold">Owner : </span>{this.props.car.owner}</p>
        </div>
      </div>
    );
  }
}

export default Car;
