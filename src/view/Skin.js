import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ItemTypes } from "./constants";
import SkinItem from "./SkinItem";

const Skin = () => {
  const [skin] = useState([
    { name: "hatA", type: ItemTypes.HAT },
    { name: "shirtA", type: ItemTypes.SHIRT },
    { name: "PantA", type: ItemTypes.PANT },
  ]);
  return (
    <Row>
      {skin.map(({ name, type }, index) => (
        <Col sm={2}>
        <SkinItem
          name={name}
          type={type}
          // isDropped={isDropped(name)}
          key={index}
        />
        </Col>
      ))}
    </Row>
  );
};

export default Skin;
