import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const DroppedSkinItem = ({ lastDroppedItem }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div onDoubleClick={() => setOpenModal(true)} className="droopedSkin">
        {lastDroppedItem.name}
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
          <Button className="btn btn-sm success"> Remove</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DroppedSkinItem;
