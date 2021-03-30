const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  title: {type: String, required: true, },
  description: { type: String, required: true, },
  tags: String,
  imageUrl: { type: String, required: true, },
  price: { type: Number, required: true, },
});

module.exports = Item = model("item", itemSchema);
