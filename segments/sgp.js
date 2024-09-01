// Function to create an SGP segment
function createSGPSegment(equipmentId, numberOfPackages) {
    return `SGP+${equipmentId}+${numberOfPackages}'`;
}

module.exports = { createSGPSegment };
