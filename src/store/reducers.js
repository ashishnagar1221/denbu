import { ItemTypes } from "../view/constants";
import { REMOVESKIN, ADDSKIN } from "./constant";
import update from "immutability-helper";

let initialState = [
  { allow: ItemTypes.HAT, lastDroppedItem: null },
  { allow: ItemTypes.SHIRT, lastDroppedItem: null },
  { allow: ItemTypes.PANT, lastDroppedItem: null },
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
        (ele) => ele.lastDroppedItem.name === payLoad.name
      );
      const newArray = state
      newArray[index].lastDroppedItem=null
      return [...newArray]
    default:
      return state;
  }
};

export default rootReducer;
