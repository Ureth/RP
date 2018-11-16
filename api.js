const express = require("express");
const router = express.Router();
const Mugger = require("./mugger")

router.get("/muggers", (req, res)=>{
  Mugger.find({})
    .then(mugger => {
      res.send(mugger);
    });
});

router.post("/muggers", (req, res)=>{
  Mugger.create(req.body)
    .then(mugger => {
      res.send(mugger);
    });
});

router.put("/muggers/:id", (req, res)=>{
  Mugger.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
      Mugger.findOne({_id: req.params.id})
        .then(mugger => {
          res.send(mugger);
        });
    });
});

router.delete("/muggers/:id", (req, res)=>{
  Mugger.deleteOne({_id: req.params.id})
    .then(mugger => {
      res.send(mugger);
    });
});

module.exports = router;