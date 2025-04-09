/**
 * Removes duplicate values from an array
 * @param {Array} array - The input array
 * @returns {Array} Array with unique values
 */
function uniqueArray(array) {
  if (!Array.isArray(array)) return [];
  return [...new Set(array)];
}

module.exports = uniqueArray;