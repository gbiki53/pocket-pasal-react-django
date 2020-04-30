import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addItem } from "../../actions/items";

class ItemForm extends Component {
  state = {
    name: "",
    price: "",
    description: "",
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, price, description } = this.state;
    const item = { name, price, description };
    this.props.addItem(item);
  };

  render() {
    const { name, price, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Items</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Item Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label>Item price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(ItemForm);
