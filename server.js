const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const { PORT, DBURL } = require("./config/index");
var cookieParser = require('cookie-parser')
const cors = require("cors");


mongoose.set("strictQuery", false);

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
app.use(cookieParser());


app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use("/user", routes);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json(error.message);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
