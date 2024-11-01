import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  productDetails: { type: String, required: true },
  image: { type: String, required: true },
  isMainProposition: { type: Boolean, required: true },
});

const createProductModel = (productsConnection) =>
  productsConnection.model("Product", productSchema);

export default createProductModel;
