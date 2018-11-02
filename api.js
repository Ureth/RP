const express = require("express");
const router = express.Router();

router.get("/muggers", (req, res)=>{
  res.send({method: "GET"});
});

router.post("/muggers", (req, res)=>{
  res.send({method: "POST"});
});

router.put("/muggers/:id", (req, res)=>{
  res.send({method: "PUT"});
});

router.delete("/muggers/:id", (req, res)=>{
  res.send({method: "DELETE"});
});

module.exports = router;