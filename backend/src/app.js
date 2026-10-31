import express from "express";
import bookingRouter from "./routes/booking.routes.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import serviceRouter from "./routes/services.routes.js";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "server is healthy" });
});

app.use("/api/booking", bookingRouter);

app.use("/api/service", serviceRouter);

app.use(errorHandler);
export default app;
