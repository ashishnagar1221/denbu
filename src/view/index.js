import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/logo.png";
import Skelton from "./skelton/Skelton";
import Skin from "./Skin/Skin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const index = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          <img src={logo} style={{ width: "20%" }} />
        </NavbarBrand>
      </Navbar>
      <Container>
        <DndProvider backend={HTML5Backend}>
          <Row>
            <Col sm={4}>
              <Skin />
            </Col>
            <Col sm={8} style={{ display: "flex", justifyContent: "center" }}>
              <Skelton />
            </Col>
          </Row>
        </DndProvider>
      </Container>
    </div>
  );
};

export default index;
