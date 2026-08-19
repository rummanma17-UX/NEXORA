import express, { type Express } from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error-handler.js";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

export default app;