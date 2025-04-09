/**
 * Formats a date object into a readable string
 * @param {Date} date - The date to format
 * @param {string} format - Format string (YYYY-MM-DD by default)
 * @returns {string} Formatted date string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  if (!(date instanceof Date)) return '';
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  let result = format;
  result = result.replace('YYYY', year);
  result = result.replace('MM', month);
  result = result.replace('DD', day);
  
  return result;
}

module.exports = formatDate;