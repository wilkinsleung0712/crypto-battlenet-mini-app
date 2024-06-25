import { proxy } from "valtio";

const initialState = {
  offset: 0,
  limit: 10,
  list: [],
  hasMore: true,
};

export const historyManager = proxy(initialState);

export const setHistoryList = (data, isReset = false) => {
  if (data.length < historyManager.limit) {
    historyManager.hasMore = false;
  }
  if (isReset) {
    historyManager.list = data;
  } else {
    historyManager.list = historyManager.list.concat(data);
  }
};

export const resetHistoryManager = () => {
  Object.assign(historyManager, initialState);
};
