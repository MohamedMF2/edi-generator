// Function to create an FTX segment
function createFTXSegment(freeText) {
    return `FTX+AAA+++${freeText}'`;
}

// Export the function
module.exports = { createFTXSegment };