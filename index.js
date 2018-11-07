const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/muggers-db");

app.use("/api", require("./api"));

app.listen(4000, ()=>{
  console.log("server is listening");
});