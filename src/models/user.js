import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initialState = {
  id: 2,
  username: "Stranger",
  walletAddress: "",
  points: 0,
};

export const userManager = proxy(initialState);

export const setUserInfo = (data) => {
  userManager.id = data.id ?? 2;
  userManager.username = data.userName ?? "";
  userManager.points = data.points ?? 0;
  userManager.walletAddress = data.address ?? "";
};

export const resetUserManager = () => {
  Object.assign(userManager, initialState);
};
