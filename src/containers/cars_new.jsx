import React, { Component } from 'react';
import { connect } from 'react-redux';
// form
import { Field, reduxForm } from 'redux-form';

import { createCar } from '../actions';
import Garage from '../components/garage';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}/>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <Garage garage={this.props.garage} />
        <div className="cars-index bg-form">
          <div className="form-content">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                label="Brand"
                name="brand"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Model"
                name="model"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Owner"
                name="owner"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Plate"
                name="plate"
                type="text"
                component={this.renderField}
              />
              <button
                className="btn btn-primary"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >Add the car</button>
            </form>
          </div>
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

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
