import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getGlassAC } from "../redux/glassConditionReducer.js";
import Wrapp from "./Wrapp.js";

class MainContainer extends React.Component {
  state = {
    glassSymbol: "BTCUSDT",
  };

  // setNewGlassSymbol = (symbol) => {
  //   this.setState({
  //     glassSymbol: symbol,
  //   });
  //   axios
  //     .get(`api/v3/depth?symbol=${symbol}&limit=500`)
  //     .then((res) => res.data)
  //     .then((res) => this.props.getGlassAC(res.bids, res.asks))
  //     .catch((err) => console.log(err));
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     axios
  //     .get(`api/v3/depth?symbol=${this.state.glassSymbol}&limit=500`)
  //     .then((res) => res.data)
  //     .then((res) => this.props.getGlassAC(res.bids, res.asks))
  //     .catch((err) => console.log(err));
  //   }, 3000);
  // }

  setNewGlassSymbol = (symbol) => {
    this.setState({
      glassSymbol: symbol,
    });
    axios
      .get(`api/v3/depth?symbol=${symbol}&limit=500`)
      .then((res) => res.data)
      .then((res) => this.props.getGlassAC(res.bids, res.asks))
      .catch((err) => console.log(err));
  };

    componentDidMount() {

      const getGlassSymbol = async () => {
        try{
        const res = await axios.get(`api/v3/depth?symbol=${this.state.glassSymbol}&limit=500`)
        const data = await res.data
        this.props.getGlassAC(data.bids, data.asks)
      } catch(err) {
        console.log('Warning is: ' + err)
      } 
  }
  setInterval(() => {
    getGlassSymbol()
  }, 3000);
  
}


  render() {
    return <Wrapp {...this.props} setNewGlassSymbol={this.setNewGlassSymbol} glassSymbol={this.state.glassSymbol}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    glass: state.firstPage,
  };
};

export default connect(mapStateToProps, { getGlassAC })(MainContainer);
