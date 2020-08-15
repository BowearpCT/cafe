const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { dessert } = require("./src/route/");

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/dessert", dessert.router);
// app.use(app.router);
// routes.initialize(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
