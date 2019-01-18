import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarStart,
  NavbarEnd,
  NavbarMenu
} from "bloomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <NavbarStart>
            <NavbarItem href="https://github.com/wiro34/goita-score">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
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
