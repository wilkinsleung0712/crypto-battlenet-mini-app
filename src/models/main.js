import { proxy } from "valtio";

const initialState = {
  amount: 0,
  maxAmount: 1000,
  predictResult: "-1",
};

export const mainManager = proxy(initialState);

export const setPredictResult = (status) => {
  mainManager.predictResult = status;
};

export const setMaxAmount = (value) => {
  mainManager.maxAmount = value;
};

export const setAmount = (value) => {
  if (value > mainManager.maxAmount) {
    mainManager.amount = mainManager.maxAmount;
  } else {
    mainManager.amount = value;
  }
};

export const resetMain = () => {
  Object.assign(mainManager, initialState);
};
