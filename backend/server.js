import cors from "cors";
import "dotenv/config";
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoutes.js";

//App config

const app = express();

const port = process.env.PORT || 4000;

connectDB();

connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/user", userRouter);

app.use("/api/product", productRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("api is working");
});

app.listen(port, () => {
  console.log("Server started on server " + port);
});
