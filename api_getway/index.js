require("dotenv").config();
const express = require("express");
const { json, urlencoded } = require("body-parser");
const router = require("./src/router");

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`Api gateway run at port ${process.env.PORT}`);
});
