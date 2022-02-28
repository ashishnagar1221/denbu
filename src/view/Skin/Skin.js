import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ItemTypes } from "../constants";
import SkinItem from "./SkinItem";
import Cap from '../../assets/images/cap-removebg-preview.png'
import Shirt from '../../assets/images/shirt-removebg-preview.png'
import Pant from '../../assets/images/pant-removebg-preview.png'
import Shoe from '../../assets/images/shoe-removebg-preview.png'

const Skin = () => {
  const [skin] = useState([
    { name:Cap, type: ItemTypes.HAT, },
    { name:Shirt, type: ItemTypes.SHIRT },
    { name:Pant, type: ItemTypes.PANT },
    { name:Shoe, type: ItemTypes.SHOE },
  ]);
  return (
    <Row>
      {skin.map(({ name, type }, index) => (
        <Col sm={2}>
          <SkinItem name={name} type={type} key={index} />
        </Col>
      ))}
    </Row>
  );
};

export default Skin;
