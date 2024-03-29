/**
 * @description handles the loading of the page
 * @param {string} type - contains type of the action
 * @param {boolean} bool - contains true or false
 * @returns {void}
 */
export const Request= (type, bool) => ({
  type,
  bool
});

/**
 * @description handles the successful actions
 * @param {string} type - contains type of the action
 * @param {object} payload  - contains details of the payload
 * @returns {object} return a successful action
 */
export const Success = (type, payload) => ({
  type,
  payload
});

/**
 * @description handles the failure actions
 * @param {string} type - contains type of the action
 * @param {object} error  - contains the error message
 * @returns {object} returns a failed action
 */
export const Failure = (type, error) => ({
  type,
  error
})