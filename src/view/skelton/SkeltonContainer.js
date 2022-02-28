import React from "react";
import { useDrop } from "react-dnd";
import DroppedSkinItem from "../DroppedSkinItem";

const SkeltonContainer = ({ accept, lastDroppedItem, base,margin,index,onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop}>
        <img src={base} alt=""/>
      {lastDroppedItem && (
        <DroppedSkinItem lastDroppedItem={lastDroppedItem} margin={margin} index={index}/>
      )}
    </div>
  );
};

export default SkeltonContainer;
