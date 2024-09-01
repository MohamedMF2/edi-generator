// Function to create a CNI segment
function createCNISegment(sequenceNumber="", consolidationItemNumber) {
    return `CNI+${sequenceNumber}+${consolidationItemNumber}'`;
  }
  
  module.exports = { createCNISegment };
  