import "reflect-metadata";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from "./data-source";
import { userRouter } from "./routes/user.routes";
import { bureauRouter } from "./routes/bureau.routes";
import { errorHandler } from "./middleware/errorHandler";
import { feedbackRouter } from "./routes/feedback.routes";
import { guichetRouter } from "./routes/guichet.routes";
import { productRouter } from "./routes/product.routes";
import { fileRouter } from "./routes/file.routes";
import { ticketRouter } from "./routes/ticket.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/auth", userRouter);
app.use("/brx", bureauRouter);
app.use("/feed", feedbackRouter);
app.use("/gchts", guichetRouter);
app.use("/prods", productRouter);
app.use("/file", fileRouter);
app.use("/tickets", ticketRouter);

// Error handler (doit être après les routes)
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Initialize database and start server
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error during Data Source initialization:", error);
    process.exit(1);
  });