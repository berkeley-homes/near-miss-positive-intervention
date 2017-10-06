import React, { Component } from "react";

class ThumbsUp extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div
        onClick={onClick}
        className="bg-dark-gray w-100 grow-1 flex flex-column justify-center pointer"
      >
        <img
          className="center db h4"
          src="/img/Thumbs_up_btn_white.svg"
          alt="ThumbsUpImg"
        />
        <p className="mt0 white tc">Positive Intervention</p>
      </div>
    );
  }
}

export default ThumbsUp;
