// Function to create a DTM segment
function createDTMSegment(qualifier, date) {
  return `DTM+${qualifier}:${date}:102'`;
}

// Specific functions for common DTM qualifiers
function createBillOfLadingDateSegment(date) {
  return createDTMSegment("95", date); // Bill of lading date
}

function createEstimatedArrivalDateSegment(date) {
  return createDTMSegment("132", date); // Estimated arrival date/time
}

// Export the functions
module.exports = {
  createBillOfLadingDateSegment,
  createEstimatedArrivalDateSegment,
  createDTMSegment,
};
