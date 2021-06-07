require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { json, urlencoded } = require("body-parser");
const router = require("./src/router");

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(router);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Post service run at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error));
