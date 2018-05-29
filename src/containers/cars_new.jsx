import React, { Component } from 'react';
import { connect } from 'react-redux';

import Garage from '../components/garage';

class CarsNew extends Component {
  render() {
    return (
      <div className="app">
        <Garage garage={this.props.garage} />
        <div className="cars-index bg-form">
          <form action="">
            <input type="text" />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}


export default connect(mapStateToProps)(CarsNew);
