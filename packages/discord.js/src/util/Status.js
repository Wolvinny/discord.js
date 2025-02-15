'use strict';

const { createEnum } = require('./Enums.js');

/**
 * @typedef {Object} Status
 * @property {number} Ready
 * @property {number} Idle
 * @property {number} WaitingForGuilds
 */

// JSDoc for IntelliSense purposes
/**
 * @type {Status}
 * @ignore
 */
exports.Status = createEnum(['Ready', 'Idle', 'WaitingForGuilds']);
