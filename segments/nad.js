// Function to create an NAD segment
function createNADSegment(qualifier, partyId, codeListQualifier, nameAndAddress, countryCode = 'EG') {
    return `NAD+${qualifier}+${partyId}:${codeListQualifier}+${nameAndAddress}++++++${countryCode}'`;
}

// Function for CN - Consignee
function createConsigneeSegment(partyId, nameAndAddress, countryCode = 'EG') {
    // Default Code list qualifier for Consignee is "52"
    return createNADSegment('CN', partyId, '52', nameAndAddress, countryCode);
}

// Function for CZ - Consignor
function createConsignorSegment(partyId, nameAndAddress, codeListQualifier = '160', countryCode) {
    // Default Code list qualifier for Consignor is "160"
    return createNADSegment('CZ', partyId, codeListQualifier, nameAndAddress, countryCode);
}

// Function for N1 - Notifier
function createNotifierSegment(nameAndAddress, countryCode = 'EG') {
    // No Party Id. or Code list qualifier for N1
    return createNADSegment('N1', '', '', nameAndAddress, countryCode);
}
// Export the functions
module.exports = {
    createConsigneeSegment,
    createConsignorSegment,
    createNotifierSegment
};
