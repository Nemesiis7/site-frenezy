import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Banner />
        <Nav />
      </header>
    );
  }
}

export default Header;
