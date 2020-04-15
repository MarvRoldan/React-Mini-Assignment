import React, { Fragment } from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    message: " ",
  };

  changeMessage(newMessage: string) {
    this.setState({
      message: newMessage,
    });
  }

  componentDidMount() {
    this.setState({
      message: "This use to say 'Hello', but thanks to componentDidMount() it doesn't =("
    });
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.changeMessage.bind(this, "Hello")}>
          CLICK!
        </button>
        <div>{this.state.message}</div>
      </Fragment>
    );
  }
}
