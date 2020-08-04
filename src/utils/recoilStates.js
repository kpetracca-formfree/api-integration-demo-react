import { atom } from "recoil";

export const orderIdGlobal = atom({
  key: "orderId",
  default: "",
});

export const demoModalGlobal = atom({
  key: "demoModal",
  default: true,
});
