import axios from "axios";

// 从环境变量中获取基础URL和默认内容类型
const API_BASE_URL =
  // @ts-ignore
  process.env.REACT_APP_API_BASE_URL || "https://b58a5de725ad.ngrok.app";
const CONTENT_TYPE =
  // @ts-ignore
  process.env.REACT_APP_API_CONTENT_TYPE || "application/json";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE,
  },
});

// 用户API
export const getUserById = (userId) => {
  return apiClient.get(`/users/${userId}`);
};

export const updateUser = (userId, userData) => {
  return apiClient.put(`/users/${userId}`, userData);
};

export const registerUser = (userData) => {
  return apiClient.post("/users/register", userData);
};

// 比赛API
export const registerForContest = (contestData) => {
  return apiClient.post("/contests/register", contestData);
};

export const getContestById = (contestId) => {
  return apiClient.get(`/contests/${contestId}`);
};

export const placeBet = (contestId, roundId, betData) => {
  return apiClient.post(
    `/contests/${contestId}/rounds/${roundId}/bets`,
    betData,
  );
};

// 将其他API按照上述模式添加
export const getHistoryList = (offset, limit = 10) => {
  return apiClient.get(
    `/rounds/history?offset=${offset}&limit=${limit}`,
  );
};