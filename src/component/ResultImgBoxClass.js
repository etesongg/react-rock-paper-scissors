import React, { Component } from "react";

export default class ResultImgBoxClass extends Component {
  render() {
    return (
      <div className="box result-img">
        <img src={this.props.img.img}></img>
      </div>
    );
  }
}
