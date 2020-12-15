import React from "react";

export default Component =>
  class extends React.Component {
    // function to load the properties of a components
    componentDidMount() {
      const { onLoad } = this.props;
      if (typeof onLoad === "function") {
        onLoad(this.props);
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };
