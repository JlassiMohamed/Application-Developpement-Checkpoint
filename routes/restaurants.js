const express = require("express");
const router = express.Router();

router.get("/test", (req, res) =>
  res.send(`Hi, is There some restaurent.. Please?`)
);

module.exports = router;
