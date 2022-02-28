import React from "react";
import { useDrag } from "react-dnd";
const style = {
  // border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
};

const SkinItem = ({ name, type, imgSource }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type]
  );
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {<img src={name}/>}
    </div>
  );
};

export default SkinItem;
