import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <a href="https://www.facebook.com/Frenezyesports/">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://twitter.com/efrenezy">
          <i className="fab fa-twitter" />
        </a>
      </div>
    );
  }
}

export default Banner;
