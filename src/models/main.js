import { faker } from "@faker-js/faker";
import { proxy } from "valtio";

const initRound = {
  roundId: "",
  lockedPrice: null,
  endPrice: null,
  startTime: "",
  endTime: "",
  openTime: "",
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
  predictResult: "-1",
  predictSuccess: false,
  upPayout: 1,
  downPayout: 1,
  upId: "",
  downId: "",
  pastRound: { ...initRound, currentPrice: 0 },
  openRound: { ...initRound },
  closedRound: { ...initRound },
  // bid info
  bidId: "",
  bidPayout: 1,
  bidText: "",
  bidRoundId: "",
  payoutAmount: 0,
  myPrediction: 0,
  isNewCloseToast: false,
};

export const mainManager = proxy(initialState);

export const setPredictResult = (status) => {
  mainManager.predictResult = status;
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
  if (openRound) {
    mainManager.upPayout = openRound.upPayout.toFixed(2);
    mainManager.downPayout = openRound.downPayout.toFixed(2);
  }
};

export const setMyPrediction = (value) => {
  mainManager.myPrediction = value;
}

export const setClosedRound = (closedRound) => {
  mainManager.closedRound = closedRound;
};

export const closeRoundToast = () => {
  mainManager.isNewCloseToast = false;
  mainManager.bidId = "";
  mainManager.bidPayout = 0;
  mainManager.bidRoundId = "";
};

export const setBid = (id, roundId) => {
  mainManager.bidId = id;
  mainManager.bidText = mainManager.upId === id ? "UP" : "DOWN";
  mainManager.bidRoundId = roundId;
};

export const setBidPayout = (payout) => {
  mainManager.bidPayout = payout?.toFixed(2) ?? 1;
};

export const setPayoutAmount = (amount) => {
  mainManager.payoutAmount = amount;
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

export const resetPredictAmount = () => {
  mainManager.amount = 0;
};
