import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarEnd,
  NavbarMenu
} from "bloomer";
import FullScreenButton, {
  Orientation
} from "../FullScreenButton/FullScreenButton";

class Header extends Component {
  render() {
    return (
      <Navbar className="is-dark">
        <NavbarBrand>
          <NavbarItem>ごいた 点数アプリ</NavbarItem>
        </NavbarBrand>

        <NavbarMenu isActive={true}>
          <NavbarEnd isFullWidth>
            <NavbarItem>
              <FullScreenButton orientation={Orientation.landscape} />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Header;
