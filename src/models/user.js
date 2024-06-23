import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initialState = {
  id: "123",
  username: "Stranger",
  points: faker.number.int({ max: 999999 }),
};

export const userManager = proxy(initialState);

export const setUserInfo = (data) => {
  userManager.id = data.id;
  userManager.username = data.username;
  userManager.points = data.points;
};

export const resetUserManager = () => {
  Object.assign(userManager, initialState);
};
