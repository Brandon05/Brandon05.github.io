import React, { Component } from 'react';

import './style.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  scrollToPortfolio(event) {
    event.preventDefault();
    var element = document.getElementById("Portfolio");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  scrollToAbout(event) {
    event.preventDefault();
    var element = document.getElementById("About");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  render() {
    return(
      <nav className="nav">
        <div className="menu" >
          <div className="menu__item">
            <a target="_blank" href="https://drive.google.com/file/d/17kF9-onJmrs4Gyp3ko5RGdKObIwB5VBT/view?usp=sharing">
            Resume
            </a>
          </div>
          <div className="menu__item">
            <a target="_blank" onClick={this.scrollToAbout}>
              About
            </a>
          </div>
          <div className="menu__item">
            <a target="_blank" onClick={this.scrollToPortfolio}>
              Portfolio
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
