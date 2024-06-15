import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Resolve the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'uploads' directory
app.use("/images", express.static(join(__dirname, 'uploads')));

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

// Root endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
