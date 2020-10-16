const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { patient, history } = require("./src/route/");

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World! !!!!!!!");
});

app.use("/patient", patient.router);
app.use("/history", history.router);
// app.use(app.router);
// routes.initialize(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
