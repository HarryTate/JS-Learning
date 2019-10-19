const express = require("express");
const router = express.Router();
const members = require("../../Members");

//Gets all members
router.get("/", (req, res) => {
  res.json(members);
});

// Get Single member
router.get("/id/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

router.get("/name/:name", (req, res) => {
  const found = members.some(member => member.name === req.params.name);
  if (found) {
    res.json(members.filter(member => member.name === req.params.name));
  } else {
    res
      .status(400)
      .json({ msg: `No member with the name of ${req.params.name}` });
  }
});

module.exports = router;
