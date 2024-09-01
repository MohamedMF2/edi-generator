const express = require("express");
const { createEQDSegment } = require("../segments/eqd");
const {
  createMEAGrossWeightSegment,
  createMEATareWeightSegment,
} = require("../segments/mea");
const { createSELSegment } = require("../segments/sel");
const { createTDTSegment } = require("../segments/tdt");
const {
  createBillOfLadingDateSegment,
  createEstimatedArrivalDateSegment,
} = require("../segments/dtm");
const { createCNISegment } = require("../segments/cni");
const {
  createPlaceOfArrivalSegment,
  createPlaceOfLoadingSegment,
  createPlaceOfDischargeSegment,
  createUltimateDestinationSegment,
  createOriginalPortOfLoadingSegment,
} = require("../segments/loc");
const {
  createAcidSegment,
  createBillOfLadingSegment,
} = require("../segments/rff");
const {
  createConsigneeSegment,
  createConsignorSegment,
  createNotifierSegment,
} = require("../segments/nad");

const router = express.Router();

// Route to generate EDIFACT file content
router.post("/generate-edi", (req, res) => {
  const units = req.body.units;

  if (!units || !Array.isArray(units)) {
    return res
      .status(400)
      .send("Invalid request data. Please provide an array of units.");
  }

  const unitsListSegments = units
    .map((unit) => {
      return [
        createEQDSegment(
          unit.containerNumber,
          unit.isoCode,
          unit.importExportStatus,
          unit.fullEmptyIndicator
        ),
        createMEAGrossWeightSegment(unit.grossWeight),
        createMEATareWeightSegment(unit.tareWeight),
        createSELSegment(unit.sealNumber, unit.sealOwner),
      ].join("\n");
    })
    .join("\n");

  // Generate BOLs list segments, including the TDT segment
  const bolsListSegments = [
    createCNISegment("01", "blNo."),
    createBillOfLadingSegment("DB436381"),

    createOriginalPortOfLoadingSegment("AEJEA"),
    createPlaceOfLoadingSegment("AEJEA"),
    createPlaceOfDischargeSegment("EGALY"),
    createUltimateDestinationSegment("EGALY"),
    createTDTSegment("24146", "JOLLY VERDE", "9320441", "ocean"),
    createBillOfLadingDateSegment("20220303"),
    createConsigneeSegment(
      "289168406",
      "COMMERCIAL INTERNATIONAL BANK - CAIRO, VARI ALEXANDRIA"
    ),
    createAcidSegment("6067205292024060021"),
    createConsignorSegment(
      "AE-01-088148",
      "MRC GLOBAL MIDDLE EAST FZE PLOT S:51207, PO BOX 261293 DUBAI UNITED ARAB EMIRATES JEBEL ALI FREE ZONE",
      "160",
      "AE"
    ),
    createNotifierSegment(
      "EGYPTIAN REFINING COMPANY (TAKRIR) S.A.E, PRIVATE FREE ZONE:MOSTOROD, THE SOUTHERN REGION, PETROLEUM SERVICES COMPLEX, SHOUBRA ELKHEEMA , QALYOUBIA, EGYPT"
    ),
  ].join("\n");

  // Combine all segments
  const ediFileContent = [unitsListSegments, bolsListSegments].join("\n");

  res.send(ediFileContent);
});

module.exports = router;
