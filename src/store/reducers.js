import { ItemTypes } from "../view/constants";
import { REMOVESKIN, ADDSKIN } from "./constant";

import Mundi from "../assets/images/mundi-removebg-preview.png";
import Dhad from "../assets/images/dhad-removebg-preview.png";
import leg from "../assets/images/leg-removebg-preview.png";
import paav from "../assets/images/paav-removebg-preview.png";

let initialState = [
  {
    allow: ItemTypes.HAT,
    lastDroppedItem: null,
    base: Mundi,
    margin: "-215px",
  },
  {
    allow: ItemTypes.SHIRT,
    lastDroppedItem: null,
    base: Dhad,
    margin: "-225px",
  },
  {
    allow: ItemTypes.PANT,
    lastDroppedItem: null,
    base: leg,
    margin: "-340px",
  },
  {
    allow: ItemTypes.SHOE,
    lastDroppedItem: null,
    base: paav,
    margin: "-115px",
  },
];

const rootReducer = (state = initialState, action) => {
  let payLoad = action.payLoad;
  switch (action.type) {
    case ADDSKIN:
      return [
        ...state.slice(0, payLoad.index),
        {
          ...state[payLoad.index],
          lastDroppedItem: payLoad.item,
        },
        ...state.slice(payLoad.index + 1),
      ];
    case REMOVESKIN:
      const index = state.findIndex(
        (ele) => ele.lastDroppedItem.name == payLoad.name
      );
      const newArray = state;
      newArray[index].lastDroppedItem = null;
      return [...newArray];
    default:
      return state;
  }
};

export default rootReducer;
