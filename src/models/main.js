import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initRound = {
  roundId: "",
  lockedPrice: null,
  endPrice: null,
  startTime: "",
  endTime: "",
  prizePool: 0,
  status: "OPEN",
  upPayout: 1,
  downPayout: 1,
  option: [
    {
      id: "",
      createdAt: "",
      optionText: "UP",
    },
    {
      optionText: "DOWN",
      id: "",
      createdAt: "",
    },
  ],
};

const initialState = {
  amount: 0,
  maxAmount: faker.number.int({ min: 100, max: 999999 }),
  predictResult: "-1",
  predictSuccess: false,
  upPayout: 1,
  downPayout: 1,
  upId: "",
  downId: "",
  pastRound: { ...initRound, lastPrice: 0 },
  openRound: { ...initRound },
  closedRound: { ...initRound },
  bidId: "",
  bidPayout: 1,
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
    mainManager.amount = Number(value);
  }
};

export const setRounds = (data) => {
  const openRound = data.find((item) => item.status === "OPEN");
  const pastRound = data.find((item) => item.status !== "OPEN"); // locked or start
  mainManager.openRound = openRound;
  mainManager.pastRound = pastRound;
  const upOption = openRound.option?.find((item) => item.optionText === "UP");
  const downOption = openRound.option?.find(
    (item) => item.optionText === "DOWN",
  );
  mainManager.upId = upOption?.id ?? "";
  mainManager.downId = downOption?.id ?? "";
  const closedRound = data.find((item) => item.status === "CLOSED");
  if (closedRound) {
    mainManager.closedRound = closedRound;
    setTimeout(() => {
      mainManager.closedRound = { ...initRound };
    }, 300000);
  }
};

export const setBid = (id) => {
  mainManager.bidId = id;
};

export const setBidPayout = (payout) => {
  mainManager.bidPayout = payout ?? 1;
};

export const resetMainManager = () => {
  Object.assign(mainManager, initialState);
};

export const resetMainPredict = () => {
  mainManager.predictResult = "-1";
};

export const setPredictStatus = (status) => {
  mainManager.predictSuccess = status;
};
