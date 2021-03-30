const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const sellerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: Number,
  imageUrl: { type: String, required: true },
  tags: { type: String, required: true },
  minOrderAmount: Number,
  costForOne: Number,
  password: { type: String, required: true },
});

module.exports = Seller = model("seller", sellerSchema);
