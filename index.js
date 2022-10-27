const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/app";

const app = express();

mongoose.connect(url);

const con = mongoose.connection;

con.on("open", function () {
  console.log("mongodb is connected");
});

app.use(express.json());

const myAppRouter = require("./routes/myApp");
app.use("/myApp", myAppRouter);

app.listen(8000, () => {
  console.log("server started");
});
