const express = require("express");
const app = express();
const port = 3001;
const dotenv = require("dotenv");
dotenv.config();
const mapBoxToken = process.env.MAPBOX_PUBLIC_TOKEN;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
