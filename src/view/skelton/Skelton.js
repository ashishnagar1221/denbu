import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { addSkin } from "../../store/action";
import SkeltonContainer from "./SkeltonContainer";
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
      {breadBoard.map(({ allow, lastDroppedItem,base }, index) => (
        <Row>
          <SkeltonContainer
            base={base}
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
