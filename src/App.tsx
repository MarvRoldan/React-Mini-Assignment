import React, { Fragment } from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    message: 'Hello'
  }

  /*changeMessage = {newMessage} => {
    this.setState({
      message:newMessage
    });
  }*/

  render() {
    return (
      <Fragment>
        <button>CLICK!</button>
        <div>{this.state.message}</div>
      </Fragment>
    );
  }
}