// Function to create a MEA segment for gross weight
function createMEAGrossWeightSegment(grossWeight, unitOfMeasure = "KGM") {
    return `MEA+AAE+G+${unitOfMeasure}:${grossWeight}'`;
  }
  
  // Function to create a MEA segment for tare weight
  function createMEATareWeightSegment(tareWeight, unitOfMeasure = "STN") {
    return `MEA+AAE+T+${unitOfMeasure}:${tareWeight}'`;
  }
  
  module.exports = {
    createMEAGrossWeightSegment,
    createMEATareWeightSegment,
  };
  