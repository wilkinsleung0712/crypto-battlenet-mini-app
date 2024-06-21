import { proxy } from "valtio";

const initialState = {
  predictResult: '-1', 
};

export const mainManager = proxy(initialState);

export const setPredictResult = (status) => {
  mainManager.predictResult = status;
}

export const resetMain = () => {
  Object.assign(mainManager, initialState);
};