const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/route')
const { PORT, DBURL } = require("./config/index");
const { Router } = require("express");

mongoose.connect(DBURL);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app = express();
app.use(express.json());
app.use('/user',routes)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
