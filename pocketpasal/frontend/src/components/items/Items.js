import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/items";

import ItemCard from "./ItemCard";

class Items extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.props.items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { getItems })(Items);
