// Function to create a SEL segment for the seal number and owner
function createSELSegment(sealNumber, sealOwner) {
    return `SEL+${sealNumber}+${sealOwner}'`;
  }
  
  module.exports = { createSELSegment };
  