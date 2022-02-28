import { useDrag } from "react-dnd";
const SkinItem = ({ name, type }) => {
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
    <div ref={drag} style={{ cursor: "move", opacity }}>
      {<img src={name} alt="" />}
    </div>
  );
};

export default SkinItem;
