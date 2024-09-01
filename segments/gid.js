// Function to create a GID segment
function createGIDSegment(goodsItemNumber = 1, numberOfPackages=0, packageType="NPL") {
    return `GID+${goodsItemNumber}+${numberOfPackages}:${packageType}'`;
}

// Example usage
const gidSegment1 = createGIDSegment(1, 10, 'PALLETS');
const gidSegment2 = createGIDSegment(1, 13, 'PKGS');
const gidSegment3 = createGIDSegment(1, 0, 'CNTR');

// Export the function
module.exports = { createGIDSegment };