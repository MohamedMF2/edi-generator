const express = require("express");
const ediRoutes = require("./routes/ediRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", ediRoutes);

app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`);
});
  