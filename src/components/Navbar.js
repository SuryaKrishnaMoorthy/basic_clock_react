import React, { Component } from "react";
import { Collapse, Navbar, NavbarBrand, Nav } from "reactstrap";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="info" className="mx-auto" dark>
        <NavbarBrand color="dark" className="mx-auto" href="/">
          <h1>Basic React Clock</h1>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar />
        </Collapse>
      </Navbar>
    );
  }
}

export default NavComponent;
