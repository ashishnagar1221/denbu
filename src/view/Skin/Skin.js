import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ItemTypes } from "../constants";
import SkinItem from "./SkinItem";
import Cap1 from "../../assets/images/cap-removebg-preview.png";
import Cap2 from "../../assets/images/hat-removebg-preview.png";
import Cap4 from "../../assets/images/hatt-removebg-preview.png";
import Cap3 from "../../assets/images/topa-removebg-preview.png";
import Shirt1 from "../../assets/images/shirt-removebg-preview.png";
import Shirt2 from "../../assets/images/whiteshirt-removebg-preview.png";
import Shirt3 from "../../assets/images/yel_shirt-removebg-preview.png";
import Shirt4 from "../../assets/images/bandi-removebg-preview.png";
import Pant1 from "../../assets/images/pant-removebg-preview.png";
import Pant2 from "../../assets/images/blackpant-removebg-preview.png";
import Pant3 from "../../assets/images/capri-removebg-preview.png";
import Pant4 from "../../assets/images/shorts-removebg-preview.png";
import Shoe1 from "../../assets/images/shoe-removebg-preview.png";
import Shoe2 from "../../assets/images/brown_shoes-removebg-preview.png";
import Shoe3 from "../../assets/images/shoes-removebg-preview.png";
import Shoe4 from "../../assets/images/sleeper-removebg-preview.png";

const Skin = () => {
  const [skin, setSkin] = useState([
    { name: Cap1, type: ItemTypes.HAT },
    { name: Cap2, type: ItemTypes.HAT },
    { name: Cap3, type: ItemTypes.HAT },
    { name: Cap4, type: ItemTypes.HAT },
    { name: Shirt1, type: ItemTypes.SHIRT },
    { name: Shirt2, type: ItemTypes.SHIRT },
    { name: Shirt3, type: ItemTypes.SHIRT },
    { name: Shirt4, type: ItemTypes.SHIRT },
    { name: Pant1, type: ItemTypes.PANT },
    { name: Pant2, type: ItemTypes.PANT },
    { name: Pant3, type: ItemTypes.PANT },
    { name: Pant4, type: ItemTypes.PANT },
    { name: Shoe1, type: ItemTypes.SHOE },
    { name: Shoe2, type: ItemTypes.SHOE },
    { name: Shoe3, type: ItemTypes.SHOE },
    { name: Shoe4, type: ItemTypes.SHOE },
  ]);
  return (
    <Row>
      {skin.map(({ name, type }, index) => (
        <Col sm={3}>
          <SkinItem name={name} type={type} key={index} />
        </Col>
      ))}
    </Row>
  );
};

export default Skin;
