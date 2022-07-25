const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const modelvar = require("../models/modeldb");
const app = express();

//create...(posting into the server)
router.post("/push", (req, res) => {
  //   res.send("Home Address using route...");
  if (!req.body) {
    res.status(400).send("Invalid request: Need to pass data!");
  }
  const savedData = new modelvar(req.body);
  savedData.save((err) => {
    if (err) {
      res.status(500).send("Oops something went wrong (Server error)");
    }
    res.status(201).send("Saved!");
    console.log(req.body);
  });
});

//read...(fetching from the server...)
router.get("/pull", (req, res) => {
  modelvar
    .find({})
    .then((data) => {
      res.status(201).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send("something went wrong...try again(Server error)");
    });
});

//updating the server...
router.put("/update", (req, res) => {
  if (!req.body) {
    res.status(400).send("need params...");
  }
  modelvar
    .findOneAndUpdate(
      {
        title: req.query.title,
      },
      req.body
    )
    .then((data) => {
      res.status(201).send("Fine...");
    })
    .catch((err) => {
      res.status(500).send("oopsies...");
      console.log(err);
    });
});

//delete
router.delete("/rem", (req, res) => {
  modelvar
    .findOneAndDelete({
      num: req.query.num,
    })
    .then((data) => {
      console.log("Successful");
      res.status(201).send("done");
    })
    .catch((err) => {
      res.status(500).send("alsfj");
    });
});

module.exports = router;
