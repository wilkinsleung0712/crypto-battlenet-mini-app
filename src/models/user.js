import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initialState = {
  username: "Stranger",
  walletAddress: "",
  points: 0,
  id: 77,
  usernameFromTg: '',
};

export const userManager = proxy(initialState);

export const setUserFromTg = (data) => {
  userManager.id = data.id ?? '';
  userManager.username = data.username ?? '';
}

export const setUserInfo = (data) => {
  userManager.points = data.points ?? 0;
  userManager.walletAddress = data.address ?? "";
};

export const resetUserManager = () => {
  Object.assign(userManager, initialState);
};
