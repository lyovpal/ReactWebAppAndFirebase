import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <MainPage />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
