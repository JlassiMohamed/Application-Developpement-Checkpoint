const express = require("express");
const { postSeller, getSellers, getSeller, deleteSeller, updateSeller } = require("../controllers/seller");
const router = express.Router();

router.post("/", postSeller);
router.get("/", getSellers);
router.get("/:id", getSeller);
router.delete("/:id", deleteSeller);
router.put("/:id", updateSeller);

module.exports = router;