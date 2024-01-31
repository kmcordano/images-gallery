import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Images/logo.svg";

const navbarStyle = {
  backgroundColor: "rgb(0, 85, 170)"
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo style={{ maxWidth: "12rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
