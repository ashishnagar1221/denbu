import React from "react";
import { useDrop } from "react-dnd";
const style = {
  height: "6rem",
  width:"8rem",
  padding: "0.5rem 1rem",
  border: "1px dashed black",
  marginBottom: "0.25rem",
  backgroundColor: "#dfa9a9",
  marginRight: "1.5rem",
  lineHeight: "normal",
};

const SkeltonContainer = ({ accept,lastDroppedItem, onDrop }) => {
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

      {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )}
    </div>
  );
};

export default SkeltonContainer;
