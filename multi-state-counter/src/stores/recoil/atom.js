import { atom } from "recoil";

/*
  Recoil atoms are units of state. Components read/write them with hooks.
  Key must be unique in the app.
*/

export const counterState = atom({
  key: "counterState",
  default: 0,
});
