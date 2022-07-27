const client = fetch;

/**
 * Generic Base Request
 * 
 * @param {string} endpoint 
 * @param {Object} payload 
 * @param {string} method 
 * @returns Promise
 */
function request(endpoint, payload = {}, method = 'POST') {
    return fetch(endpoint, {
        method: method,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

/**
 * 
 * @param {string} endpoint 
 * @returns Promise
 */
 const get = (endpoint) => {
    return fetch(endpoint);
};

/**
 * Post Request Method
 * 
 * @param {string} endpoint 
 * @param {Object} payload 
 * @param {string} method 
 * @returns Promise
 */
const post = (endpoint, payload = {}) => {
    return request(endpoint, payload);
};

/**
 * Patch Request Method
 * 
 * @param {string} endpoint 
 * @param {Object} payload 
 * @param {string} method 
 * @returns Promise
 */
const patch = (endpoint, payload = {}) => {
    return request(endpoint, payload, 'PATCH');
};

/**
 * Delete Request Method
 * 
 * @param {string} endpoint 
 * @param {Object} payload 
 * @param {string} method 
 * @returns Promise
 */
const deleteContext = (endpoint, payload = {}) => {
    return request(endpoint, payload, 'DELETE');
};

export default {
    delete: deleteContext, 
    post,
    patch,
    get
};