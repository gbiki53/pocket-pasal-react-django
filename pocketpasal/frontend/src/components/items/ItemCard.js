import React, { Component } from "react";
import NumberFormat from "react-number-format";

class ItemCard extends Component {
  render() {
    return (
      <div className="col-md-3" style={{ marginBottom: 10 }}>
        <div className="card">
          <img
            src="https://via.placeholder.com/200"
            className="card-img-top"
            alt="product image"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.item.name}</h5>
            <p className="card-text">
              Price:
              <NumberFormat
                displayType="text"
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                prefix={" Rs. "}
                value={this.props.item.price}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
