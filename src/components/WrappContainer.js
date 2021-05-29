import React from "react";
import { connect } from "react-redux";
import { getGlassSymbolApi } from "../api/api.js";
import { getGlassAC } from "../redux/glassConditionReducer.js";
import Wrapp from "./Wrapp.js";

class MainContainer extends React.Component {
  state = {
    glassSymbol: "BTCUSDT",
  };

  componentDidMount() {
    setInterval(() => {
      getGlassSymbolApi(this.state.glassSymbol).then((res) =>
      this.props.getGlassAC(res.data.bids, res.data.asks)
    );
    }, 2000);
  }

  setNewGlassSymbol = (symbol) => {
    this.setState({
      glassSymbol: symbol,
    });
    getGlassSymbolApi(symbol).then((res) =>
      this.props.getGlassAC(res.data.bids, res.data.asks)
    );
  };

  render() {
    return (
      <Wrapp
        {...this.props}
        setNewGlassSymbol={this.setNewGlassSymbol}
        glassSymbol={this.state.glassSymbol}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    glass: state.firstPage,
  };
};

export default connect(mapStateToProps, { getGlassAC })(MainContainer);
