import { proxy } from "valtio";

const initialState = {
  list: [],
};

export const historyManager = proxy(initialState);

export const setHistoryList = (data) => {
  if (data.length > 0) {
    historyManager.list.push(...data);
  }
};

export const resetHistoryManager = () => {
  Object.assign(historyManager, initialState);
};
