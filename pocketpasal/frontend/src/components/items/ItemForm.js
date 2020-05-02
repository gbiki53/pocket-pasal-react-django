import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addItem } from "../../actions/items";

class ItemForm extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    image: null,
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onImageChange = (e) => this.setState({ [e.target.name]: e.target.files[0] });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, price, description, image } = this.state;
    const item = new FormData();
    item.append("name", name);
    item.append("price", price);
    item.append("description", description);
    item.append("image", image, image.name);
    this.props.addItem(item);
    this.setState({
      name: "",
      price: "",
      description: "",
      image: null,
    });
  };

  render() {
    const { name, price, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Items</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Item Name: </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Item Description:{" "}
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Item price:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="price"
                onChange={this.onChange}
                value={price}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Item photos:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="file"
                name="image"
                onChange={this.onImageChange}
              />
            </div>
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
