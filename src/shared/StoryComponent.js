import React, { Component } from 'react';
import './App.css';

class Story extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    }
  };

  onClickOpenShopTheLook () {
    this.setState({
      open: true,
    });
  };

  onClickCloseShopTheLook () {
    this.setState({
      open: false,
    });
  };
  
  showShopTheLook () {
    return (
      <div>
        <div className="shopTheLook-container">
          <div className="shopTheLook__image">
            <div className="item"></div>
            <div className="shopTheLook__designer">Gucci</div>
            <div className="shopTheLook__price">£1300</div>
          </div>
          <div className="shopTheLook__image">
            <div className="item"></div>
            <div className="shopTheLook__designer">Valentino</div>
            <div className="shopTheLook__price">£1800</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="container full">
          <div className="column sm-12 lg-6">
            <div className="story">
              <p className="subhead story__copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="story__copy">
              Eros donec ac odio tempor. Hac habitasse platea dictumst quisque. 
              Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. 
              Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. 
              Nisl nisi scelerisque eu ultrices vitae auctor eu augue. 
              </p>
              <p className="story__copy">
              Aenean sed adipiscing diam donec adipiscing tristique risus. 
              Porta non pulvinar neque laoreet suspendisse interdum. 
              Ligula ullamcorper malesuada proin libero nunc consequat. 
              Amet consectetur adipiscing elit ut. At tempor commodo ullamcorper a lacus vestibulum sed.
              </p>
              <h3 className="story__quote">
                &lsquo;&lsquo; 
                Porta non pulvinar neque laoreet suspendisse interdum. 
                Ligula ullamcorper malesuada proin libero nunc consequat.
                &rsquo;&rsquo;
              </h3>
              <p className="story__copy">
              Eros donec ac odio tempor. Hac habitasse platea dictumst quisque. 
              Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. 
              Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. 
              Nisl nisi scelerisque eu ultrices vitae auctor eu augue. 
              </p>
            </div>
          </div>
          <div className="column sm-12 lg-6">
            <figure className="image">
              <img src={require('../assets/w950_column_image.jpeg')}/>
              { this.state.open ? this.showShopTheLook() : '' }
              <div>
                {this.state.open ? 
                    <button 
                    className="image__shop-btn"
                    onClick={() => this.onClickCloseShopTheLook() }
                    >
                      CLOSE
                    </button>
                  : 
                  <button 
                  className="image__shop-btn"
                  onClick={() => this.onClickOpenShopTheLook() }
                  >
                    SHOP THE LOOK (2)
                  </button>
                }
                <figcaption className="image__credits">Ligula ullamcorper malesuada proin libero nunc consequat.</figcaption>
              </div>
            </figure>
           
          </div>
        </div>
        <div className="container centered">
            <div className="column sm-12">
              <p className="copy">
                Tincidunt eget nullam non nisi est. Ac feugiat sed lectus vestibulum mattis ullamcorper. 
                Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. 
                Tempor nec feugiat nisl pretium fusce id velit. Bibendum arcu vitae elementum curabitur vitae nunc. 
                Consequat ac felis donec et odio pellentesque. Sagittis vitae et leo duis. 
                Quis varius quam quisque id diam vel quam. 
                Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Ornare lectus sit amet est. Convallis a cras semper auctor neque vitae tempus quam pellentesque.
                In tellus integer feugiat scelerisque varius morbi.
              </p>
              <p className="copy"> 
                &lsquo; Tempor nec feugiat nisl pretium fusce id velit. Bibendum arcu vitae elementum curabitur vitae nunc. 
                  Consequat ac felis donec et odio pellentesque. Sagittis vitae et leo duis. 
                  Quis varius quam quisque id diam vel quam. 
                  Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                 &rsquo; 
              </p>
              <p className="copy">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
