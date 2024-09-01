// Function to create an EQD segment
function createEQDSegment(containerNumber, isoCode, importExportStatus, fullEmptyIndicator) {
    return `EQD+CN+${containerNumber}+${isoCode}::5++${importExportStatus}+${fullEmptyIndicator}'`;
  }
  
  module.exports = { createEQDSegment };
  