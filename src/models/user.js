import { proxy } from "valtio";

const initialState = {
  id: "",
};

export const userManager = proxy(initialState);
