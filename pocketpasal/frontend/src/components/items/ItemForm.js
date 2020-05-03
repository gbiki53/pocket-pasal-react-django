import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { addItem } from "../../actions/items";

const ItemForm = ({ addItem }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const { name, price, description, image } = data;
    console.log(image[0].name);
    const item = new FormData();
    item.append("name", name);
    item.append("price", price);
    item.append("description", description);
    item.append("image", image[0], image[0].name);
    addItem(item);
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Items</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Item Name: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="badge badge-danger float-right mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Item Description: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="description"
              ref={register({ required: true })}
            />
            {errors.description && (
              <span className="badge badge-danger float-right mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Item price:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="number"
              name="price"
              ref={register({ required: true })}
            />
            {errors.price && (
              <span className="badge badge-danger float-right mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Item photos:</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="file"
              name="image"
              ref={register({ required: true })}
            />
            {errors.image && (
              <span className="badge badge-danger float-right mt-1">
                Please select at least 1 picture
              </span>
            )}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Submit Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addItem })(ItemForm);
