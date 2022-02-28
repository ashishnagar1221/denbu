import { REMOVESKIN, ADDSKIN } from "./constant";

export function addSkin(payLoad) {
  return { type: ADDSKIN, payLoad };
}

export function removeSkin(payLoad) {
  return { type: REMOVESKIN, payLoad };
}