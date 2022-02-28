import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { ItemTypes } from "../constants";
import { addSkin } from "../../store/action";
import SkeltonContainer from "./SkeltonContainer";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";

const Skelton = () => {
  const breadBoard = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(breadBoard);
  useEffect(() => {}, [breadBoard]);

  const handleDrop = (index, item) => {
    dispatch(addSkin({ index, item }));
  };

  return (
    <div>
      {breadBoard.map(({ allow, lastDroppedItem }, index) => (
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
