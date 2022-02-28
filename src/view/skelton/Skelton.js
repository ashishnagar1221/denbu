import React from "react";
import { Button, Row } from "reactstrap";
import { addSkin, resetSkelton } from "../../store/action";
import SkeltonContainer from "./SkeltonContainer";
import { useDispatch, useSelector } from "react-redux";

const Skelton = () => {
  const breadBoard = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDrop = (index, item) => {
    dispatch(addSkin({ index, item }));
  };

  const handleReset = () => {
    dispatch(resetSkelton());
  };
  return (
    <div>
      {breadBoard.map(({ allow, lastDroppedItem, base, margin }, index) => (
        <Row key={index}>
          <SkeltonContainer
            base={base}
            accept={allow}
            margin={margin}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            index={index}
          />
        </Row>
      ))}
      <br />
      <br />
      <br />
      <Row>
        <center>
          <Button
            className="btn"
            size="lg"
            color="primary"
            onClick={() => handleReset()}
          >
            RESET
          </Button>
        </center>
      </Row>
    </div>
  );
};

export default Skelton;
