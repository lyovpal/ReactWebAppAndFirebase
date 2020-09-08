import React from "react";
import ItemPage from "./itemPage/ItemPage";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>MainPage</h1>
        <h2><ItemPage/></h2>
      </div>
    );
  }
}

export default MainPage;
