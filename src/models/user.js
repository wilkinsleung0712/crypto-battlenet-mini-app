import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initialState = {
  id: 4,
  username: "Stranger",
  walletAddress: "",
  points: 0,
  idFromTg: '',
  usernameFromTg: '',
};

export const userManager = proxy(initialState);

export const setUserFromTg = (data) => {
  userManager.idFromTg = data.id ?? '';
  userManager.username = data.username ?? '';
}

export const setUserInfo = (data) => {
  userManager.id = data.id ?? 4;
  // userManager.username = data.userName ?? data.username ?? '';
  userManager.points = data.points ?? 0;
  userManager.walletAddress = data.address ?? "";
};

export const resetUserManager = () => {
  Object.assign(userManager, initialState);
};
