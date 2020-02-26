import React from "react";

export default class Provider extends React.Component<{ store: {} }> {
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
