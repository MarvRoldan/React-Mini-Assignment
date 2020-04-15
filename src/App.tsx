import React, { Fragment } from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    message: 'Hello'
  }

  changeMessage (newMessage: string) {
    this.setState({
      message: newMessage
    })
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.changeMessage.bind(this, 'Goodbye')}>CLICK!</button>
        <div>{this.state.message}</div>
      </Fragment>
    );
  }
}