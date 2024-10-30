import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productsRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import path from 'node:path'
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

const { productsConnection, usersConnection } = await connectDB();

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.use('/images', express.static(path.join(__dirname, 'images')));

const PORT = process.env.PORT || 9000;

server.use("/api", productsRouter(productsConnection));
server.use("/api", userRouter(usersConnection));

server.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

server.listen(PORT, () => {
  console.log("Server started at http://localhost:9000");
});
