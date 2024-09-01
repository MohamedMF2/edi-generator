// Function to create a CST segment
function createCSTSegment(goodsItemNumber = 1) {
    return `CST+${goodsItemNumber}'`;
}

// Example usage
const cstSegment = createCSTSegment();

// Export the function
module.exports = { createCSTSegment };