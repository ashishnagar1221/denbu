import { ItemTypes } from "../view/constants";
import { REMOVESKIN, ADDSKIN,RESET } from "./constant";

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
  console.log(payLoad);
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
      return [
        ...state.slice(0, payLoad.index),
        {
          ...state[payLoad.index],
          lastDroppedItem: null,
        },
        ...state.slice(payLoad.index + 1),
      ];
    case RESET:
      return [
        ...initialState
      ]
    default:
      return state;
  }
};

export default rootReducer;
