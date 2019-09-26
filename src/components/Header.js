import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imurg.com/KDIDiSE.png" />

          <div>
            <strong>Meu perfil</strong>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
