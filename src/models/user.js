import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initialState = {
  id: 2,
  username: "Stranger",
  points: faker.number.int({ max: 2000 }),
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
