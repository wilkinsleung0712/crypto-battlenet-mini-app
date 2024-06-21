const initialState = {
  polling: false,
  timeout: false,
  countdown: 0,
  paymentRef: "",
  timerId: null,
};

export const statusPollingManager = proxy(initialState);

export const startStatusPolling = () => {
  statusPollingManager.polling = true;
};

export const startCountdown = () => {
  statusPollingManager.countdown = timeoutSpan;
  statusPollingManager.timerId = setInterval(() => {
    const { countdown, timerId } = statusPollingManager;
    if (countdown <= 0) {
      if (timerId) {
        clearInterval(timerId);
        statusPollingManager.timerId = null;
      }
      statusPollingManager.timeout = true;
    } else {
      statusPollingManager.countdown = Math.max(countdown - 1000, 0);
    }
  }, 1000);
};

export const stopStatusPolling = () => {
  const { timerId } = statusPollingManager;
  statusPollingManager.polling = false;
  if (timerId) clearInterval(timerId);
  statusPollingManager.timerId = null;
};

export const resetStatusPolling = () => {
  const { timerId } = statusPollingManager;
  if (timerId) clearInterval(timerId);
  Object.assign(statusPollingManager, initialState);
};

export const savePaymentRef = (paymentRef) => {
  statusPollingManager.paymentRef = paymentRef ?? "";
};
