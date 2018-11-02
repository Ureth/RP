const express = require("express");

const app = express();

app.use("/api", require("./api"));

app.listen(4000, ()=>{
  console.log("server is listening");
});