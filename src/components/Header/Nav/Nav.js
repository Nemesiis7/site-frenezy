import React from "react";
import logo from './assets/Logo.png';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    return (
      <div className="menu">
        <img
          src={logo}
          alt="Logo_Transparent_Frenezy"
          width="30px"
          height="30px"
        />
        <a className="menu-item" href="./routes/accueil.html">
        accueil
       </a>
       <a className="menu-item" href="./routes/stream.html">
        stream
      </a>
      <a className="menu-item" href="./routes/infos.html">
        infos
      </a>
      <a className="menu-item" href="./routes/contact.html">
        CONTACT
      </a>
      </div>
    );
  }
}

export default Nav;
