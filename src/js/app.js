import React, { Component } from "react";
import logo from "@/assets/logo.svg";
import loupe from "@/assets/loupe.svg";
import document from "@/assets/document.svg";
import "@/css/app.scss";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-container__sidebar">
            <nav className="navigation">
                <div className="navigation__link">
                    <img className="navigation__icon" src={loupe} />
                </div>
                <div className="navigation__link">
                    <img className="navigation__icon" src={document} />
                </div>
            </nav>
        </div>
        <div className="main-container__project-structer">
            hi how are 
        </div>
        <div className="main-container__open-charts">
            you what
        </div>
        <div className="main-container__chart">
            are you doing
        </div>
        <div className="main-container__settings">
            are you doing
        </div>
      </div>
    );
  }
}

export default App;
