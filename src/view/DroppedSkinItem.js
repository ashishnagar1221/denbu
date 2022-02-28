import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSkin } from "../store/action";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const DroppedSkinItem = ({ lastDroppedItem, margin }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const drag = useSelector((state) => state);
  const handleRemove = (item) => {
    console.log(item);
    dispatch(removeSkin(item));
  };
  useEffect(() => {
    console.log(drag);
  }, [drag]);
  return (
    <>
      <div onDoubleClick={() => setOpenModal(true)}>
        <img
          src={lastDroppedItem.name}
          style={{ zIndex: 9999, marginTop: margin }}
        />
      </div>
      <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalHeader>Remove this skin ?</ModalHeader>
        <ModalBody>
          <Button
            className="btn btn-sm secondary"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-sm success"
            onClick={() => {
              handleRemove(lastDroppedItem);
            }}
          >
            Remove
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DroppedSkinItem;
