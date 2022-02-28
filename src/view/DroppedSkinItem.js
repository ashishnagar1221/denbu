import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeSkin } from "../store/action";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const DroppedSkinItem = ({ lastDroppedItem, margin, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleRemove = (item, index) => {
    dispatch(removeSkin({item, index}));
  };

  return (
    <>
      <div onDoubleClick={() => setOpenModal(true)}>
        <img
          src={lastDroppedItem.name}
          style={{ zIndex: 9999, marginTop: margin }}
          className="droopedSkin"
          alt=""
        />
      </div>
      <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalHeader>Remove this skin ?</ModalHeader>
        <ModalBody>
          <Button
            className="btn btn-sm float-end"
            color="secondary"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-sm float-end mx-2"
            color="success"
            onClick={() => {
              handleRemove(lastDroppedItem, index);
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
