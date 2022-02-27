import React, { useState } from "react";
import { Row } from "reactstrap";
import { ItemTypes } from "../constants";
import SkeltonContainer from "./SkeltonContainer";
import update from "immutability-helper";

const Skelton = () => {
  const [breadBoard, setBreadBoard] = useState([
    { allow: ItemTypes.HAT, lastDroppedItem: null },
    { allow: ItemTypes.SHIRT, lastDroppedItem: null },
    { allow: ItemTypes.PANT, lastDroppedItem: null },
  ]);
  const handleDrop = (index, item) => {
    console.log(index, item);
    setBreadBoard(
      update(breadBoard, {
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      })
    );
  };
  return (
    <div>
      {breadBoard.map(({ allow,lastDroppedItem }, index) => (
        <Row>
          <SkeltonContainer
            accept={allow}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        </Row>
      ))}
    </div>
  );
};

export default Skelton;
