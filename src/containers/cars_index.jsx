import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

import Car from '../components/car';
import Garage from '../components/garage';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="app">
        <Garage garage={this.props.garage}></Garage>
        <div className="cars-index">
          {this.props.cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <Car car={car} key={car.id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars: fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
