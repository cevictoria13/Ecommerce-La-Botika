const { ObjectId } = require("mongodb");
const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  _id: {type: ObjectId, required: true},
  category: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  inCart: { type: Boolean, default: false },
  sku: { type: String, required: true },
  stock : { type: Number, required: true },
});

module.exports = model("Product", ProductSchema);
