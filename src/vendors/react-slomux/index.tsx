import React from "react";

export const connect = (
  mapStateToProps: (state: number, props: any) => {},
  mapDispatchToProps: (dispatch: Function, props: any) => {}
) => (Component: React.FC) => {
  class WrappedComponent extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          {...mapStateToProps(this.context.store.getState(), this.props)}
          {...mapDispatchToProps(this.context.store.dispatch, this.props)}
        />
      );
    }

    componentDidUpdate() {
      this.context.store.subscribe(this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    };
  }

  //   WrappedComponent.contextTypes = {
  //     store: PropTypes.object
  //   };

  return WrappedComponent;
};