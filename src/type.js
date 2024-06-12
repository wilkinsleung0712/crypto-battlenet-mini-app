/**
 * @typedef {Object} UserRegisterRequest
 * @property {string} tonConnectWalletAddress - Use 'string' instead of 'String'
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
 * @property {string} contestStartDateTime - Use ISO 8601 string for date-time
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

module.exports = {};
