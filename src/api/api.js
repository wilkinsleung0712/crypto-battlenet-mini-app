const axios = require('axios');

/**
 * @typedef {Object} UserRegisterRequest
 * @property {string} tonConnectWalletAddress
 * @property {string} username
 * @property {string} telegramId
 */

/**
 * @typedef {Object} UserDetailsResponse
 * @property {number} userId
 * @property {string} userName
 * @property {number} points
 */

/**
 * @typedef {Object} ContestRegisterRequest
 * @property {string} content
 * @property {number} minBetAmount
 * @property {number} maxBetAmount
 * @property {number} userId
 * @property {string} contestStartDateTime
 * @property {string} contestEndDateTime
 * @property {string[]} [options]
 */

/**
 * @typedef {Object} ContestDetails
 * @property {number} contestId
 * @property {string} content
 * @property {number} minBetAmount
 * @property {number} maxBetAmount
 * @property {string[]} options
 */

/**
 * @typedef {Object} RoundDetails
 * @property {number} roundId
 * @property {number} startPrice
 * @property {number} endPrice
 * @property {number} startTime
 * @property {number} endTime
 * @property {number} priceFactor
 */

/**
 * @typedef {Object} ContestWebsocketResponse
 * @property {ContestDetails} contest
 * @property {RoundDetails} roundId
 * @property {number} lastPrice
 * @property {number} pricePool
 * @property {number} lockedPrice
 */

/**
 * @typedef {Object} BetRegisterRequest
 * @property {number} amount
 * @property {number} userId
 * @property {number} optionId
 */

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = process.env.REACT_APP_API_CONTENT_TYPE;

/**
 * Function to register a user
 * @param {UserRegisterRequest} userData
 * @returns {Promise<UserDetailsResponse>}
 */
const registerUser = async (userData) => {
    const response = await axios.post('/users/register', userData);
    return response.data;
};

/**
 * Function to get user by ID
 * @param {number} userId
 * @returns {Promise<UserDetailsResponse>}
 */
const getUserById = async (userId) => {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
};

/**
 * Function to register a contest
 * @param {ContestRegisterRequest} contestData
 * @returns {Promise<ContestDetails>}
 */
const registerContest = async (contestData) => {
    const response = await axios.post('/contests/register', contestData);
    return response.data;
};

/**
 * Function to get contest by ID
 * @param {number} contestId
 * @returns {Promise<ContestDetails>}
 */
const getContestById = async (contestId) => {
    const response = await axios.get(`/contests/${contestId}`);
    return response.data;
};

/**
 * Example function to handle WebSocket messages
 * @param {ContestWebsocketResponse} message
 */
const handleWebSocketMessage = (message) => {
    console.log('Received WebSocket message:', message);
    // Handle the WebSocket message
};

/**
 * Function to place a bet
 * @param {number} contestId
 * @param {number} roundId
 * @param {BetRegisterRequest} betData
 * @returns {Promise<void>}
 */
const placeBet = async (contestId, roundId, betData) => {
    await axios.put(`/contests/${contestId}/${roundId}/bet`, betData);
};

module.exports = {
    registerUser,
    getUserById,
    registerContest,
    getContestById,
    handleWebSocketMessage,
    placeBet
};
