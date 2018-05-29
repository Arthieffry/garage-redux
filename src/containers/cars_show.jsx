import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCar } from '../actions';

import Car from '../components/car';
import Garage from '../components/garage';


class CarsShow extends Component {
  componentWillMount() {
    this.props.fetchCar(this.props.car.id);
  }

  render() {
    if (!this.props) {
      return <p>Loading...</p>;
    }
    return (
      <div className="app">
        <Garage garage={this.props.garage} />
        <div className="cars-index">
          <Car car={this.props.car} />
        </div>
      </div>
    );
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
