import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCar } from '../actions';

import Garage from '../components/garage';


class CarsShow extends Component {
  componentWillMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  displayShow = (car) => {
    return (
      <div className="cars-card">
        <img src="../../assets/images/lewagon.png" alt="" className="car-img-show" />
        <div className="car-content">
          <div>
            <h4>{car.brand} - {car.model}</h4>
            <p><span className="bold">Owner : </span>{car.owner}</p>
          </div>
          <h3 className="bold plate">{car.plate}</h3>
        </div>
        <div className="delete bold">🗑 Delete</div>
      </div>
    );
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }{
      return (
        <div className="app">
          <Garage garage={this.props.garage} />
          <div className="cars-index">
            {this.displayShow(this.props.car)}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  const carSelected = state.cars.find(car => car.id === parseInt(ownProps.match.params.id));
  return {
    garage: state.garage,
    car: carSelected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
