import { atom } from "recoil";

export const demoTypeGlobal = atom({
  key: "demoType",
  default: "", //switches between POS and LOS
});
