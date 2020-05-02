import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes, { array } from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(pervProps) {
    const { error, alert, message } = this.props;
    if (error !== pervProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.price) alert.error(`Price: ${error.msg.price.join()}`);
      if (error.msg.description)
        alert.error(`Description: ${error.msg.description.join()}`);
      if (error.msg.image) alert.error(`Image: ${error.msg.image.join()}`);
    }

    if (message !== pervProps.message) {
      if (message.itemAdded) alert.success(message.itemAdded);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
