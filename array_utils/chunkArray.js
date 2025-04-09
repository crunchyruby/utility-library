/**
 * Splits an array into chunks of specified size
 * @param {Array} array - The input array
 * @param {number} size - Size of each chunk
 * @returns {Array} Array of chunks
 */
function chunkArray(array, size) {
  if (!Array.isArray(array) || !size || size < 1) return [];
  
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  
  return chunks;
}

module.exports = chunkArray;