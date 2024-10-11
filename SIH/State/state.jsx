import { atom } from "recoil";

export const userRoleState = atom({
  key: "userRoleState", // Unique ID (with respect to other atoms/selectors)
  default: null, // Default value (aka initial value)
});