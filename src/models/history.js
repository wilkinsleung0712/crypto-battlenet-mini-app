import { proxy } from "valtio";

const initialState = {
  list: [],
};

export const historyManager = proxy(initialState);

export const setHistoryList = (data) => {
  historyManager.list = historyManager.list.concat(data);
};

export const resetHistoryManager = () => {
  Object.assign(historyManager, initialState);
};
