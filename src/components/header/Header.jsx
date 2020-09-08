import React from "react";
import Login from "./login/Login";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
        <Login />
      </div>
    );
  }
}

export default Header;
