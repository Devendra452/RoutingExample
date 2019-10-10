import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}
