import React from "react";
import { useDrop } from "react-dnd";
import DroppedSkinItem from "../DroppedSkinItem";
const style = {
  // marginBottom: "0.1rem",
  marginRight: "1.5rem",
  lineHeight: "normal",
};

const SkeltonContainer = ({ accept, lastDroppedItem, base,onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop} role="Dustbin" style={{ ...style }}>
      {/* {isActive
        ? "Release to drop"
        : `This dustbin accepts: ${accept.join(", ")}`} */}
        <img src={base}/>

      {lastDroppedItem && (
        <DroppedSkinItem lastDroppedItem={lastDroppedItem}/>
      )}
    </div>
  );
};

export default SkeltonContainer;
