import express from "express";
import createProductModel from "../models/Product.js";

const productsRouter = (productConnection) => {
  const Product = createProductModel(productConnection);
  const router = express.Router();

  router
    .get("/products", async (req, res) => {
      try {
        const products = await Product.find();
        res.json(products);
      } catch (e) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
    })
    .get("/product/:id", async (req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        if (!product) {
          res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
      } catch (e) {
        res.status(500).json({ error: "Failed to fetch product" });
      }
    })
    .get("/productPage/:id", async (req, res) => {
      try {
        const mainProductId = req.params.id;
        const mainProduct = await Product.findById(mainProductId);
        if (!mainProduct) {
          res.status(404).json({ error: "Product not found" });
        }

        const similarItems = await Product.find({
          _id: { $ne: mainProductId },
          category: mainProduct.category,
        }).limit(5);

        res.json({
          mainProduct,
          similarItems,
        });
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to fetch product page" });
      }
    })
    .post("/product", async (req, res) => {
      try {
        const newProduct = new Product({
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          description: req.body.description,
          productDetails: req.body.productDetails,
          image: req.body.image,
        });

        await newProduct.save();
        res.status(201).json(newProduct);
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to add product" });
      }
    });
  return router;
};

export default productsRouter;
