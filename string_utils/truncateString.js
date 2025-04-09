/**
 * Truncates a string to a specified length and adds ellipsis
 * @param {string} str - The input string
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} The truncated string
 */
function truncateString(str, maxLength) {
  if (!str || typeof str !== 'string') return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

module.exports = truncateString;