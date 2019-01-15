import { Navbar, NavbarBrand, NavbarItem } from "bloomer";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <Navbar className="is-dark">
        <NavbarBrand>
          <NavbarItem>ごいた 点数アプリ</NavbarItem>
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
