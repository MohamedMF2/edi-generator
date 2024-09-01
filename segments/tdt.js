// segments/tdt.js
function createTDTSegment(voyageNumber, vesselName, vesselImoNumber,company) {
    const mainCarriageTransport = '20'; // Constant value for main-carriage transport
    const modeOfTransport = '1'; // Constant value for mode of transport
    
    return `TDT+${mainCarriageTransport}+${voyageNumber}+${modeOfTransport}++${company}:172:166:11111+++${vesselImoNumber}:103::${vesselName}'`;
}

module.exports = { createTDTSegment };
