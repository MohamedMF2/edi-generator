function createRFFSegment(qualifier, ReferenceNumber) {
  return `RFF+${qualifier}:${ReferenceNumber}'`;
}

// Specific functions for common RFF qualifiers
function createBillOfLadingSegment(billOfLadingNumber) {
  return createRFFSegment("BM", billOfLadingNumber);
}

function createAcidSegment(acidNumber) {
  return createRFFSegment("AFM", acidNumber);
}

module.exports = {
  createAcidSegment,
  createBillOfLadingSegment,
  createRFFSegment,
};
