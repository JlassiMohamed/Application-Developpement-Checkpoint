const express = require("express");
const { postItem, getItems, getItem, deleteItem, updateItem } = require("../controllers/item");
const router = express.Router();

router.post("/", postItem);
router.get("/", getItems);
router.get("/:id", getItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

module.exports = router;