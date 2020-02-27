import React from "react";
import PropTypes from "proptypes";

export const connect = (
  mapStateToProps: (state: number, props: any) => {},
  mapDispatchToProps: (dispatch: Function, props: any) => {}
) => (Component: React.ComponentClass<any>) => {
  class WrappedComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    };
    render() {
      return (
        <Component
          {...this.props}
          {...mapStateToProps(this.context.store.getState(), this.props)}
          {...mapDispatchToProps(this.context.store.dispatch, this.props)}
        />
      );
    }
    // Replace method componentDidUpdate with componentDidMount
    componentDidMount() {
      this.context.store.subscribe(this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    };
  }

  // WrappedComponent.contextTypes = {
  //   store: PropTypes.object
  // };

  return WrappedComponent;
};
