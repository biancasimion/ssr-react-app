import React, { Component } from 'react';
import './App.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__parallax">
            <div className="hero__title">
              <h5>cover story</h5>
              <h1>Standing Strong</h1>
            </div>
          <div className="hero__credits">
            <h5 className="hero__with">With</h5>
            <h5 className="hero__author">Danai Gurira</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
