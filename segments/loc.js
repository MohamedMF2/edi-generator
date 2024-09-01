// Function to create a LOC segment
function createLOCSegment(qualifier, location) {
    return `LOC+${qualifier}+${location}'`;
  }
  
  // Specific functions for common LOC qualifiers
  function createPlaceOfArrivalSegment(location) {
    return createLOCSegment('60', location); // Place of arrival
  }

  function createPlaceOfLoadingSegment(location) {
    return createLOCSegment('9', location); // Place/port of loading
  }
  
  function createPlaceOfDischargeSegment(location) {
    return createLOCSegment('11', location); // Place/port of discharge
  }
  
  function createUltimateDestinationSegment(location) {
    return createLOCSegment('20', location); // Place of ultimate destination
  }
  
  function createOriginalPortOfLoadingSegment(location) {
    return createLOCSegment('76', location); // Original port of loading
  }
  
  // Export the functions
  module.exports = {
    createPlaceOfArrivalSegment,
    createPlaceOfLoadingSegment,
    createPlaceOfDischargeSegment,
    createUltimateDestinationSegment,
    createOriginalPortOfLoadingSegment,
    createLOCSegment
  };
  