import React from "react";
import PropTypes from "proptypes";

export default class Provider extends React.Component<{ store: {} }> {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

// Provider.childContextTypes = {
//   store: PropTypes.object
// };
