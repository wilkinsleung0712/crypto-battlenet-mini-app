import { proxy } from "valtio";

const initialState = {
  id: "",
  username: 'Stranger',
  points: '999',
};

export const userManager = proxy(initialState);

export const setUserInfo = (data) => {
  userManager.id = data.id;
  userManager.username = data.username;
  userManager.points = data.points;
}

export const resetUserManager = () => {
  Object.assign(userManager, initialState);
}
