import express from "express";
import validate from "../middlewares/validation.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import { paginationSchema } from "../validators/pagination.validator.js";
import {
  createServices,
  deleteServices,
  getService,
  getServices,
  updateServices,
} from "../controllers/service.controller.js";

const serviceRouter = express.Router();

serviceRouter.get("/", validate(paginationSchema, "query"), getServices);
serviceRouter.get("/:id", getService);
serviceRouter.post("/", upload.single("image"), createServices);
serviceRouter.patch("/:id", updateServices);
serviceRouter.delete("/:id", deleteServices);

export default serviceRouter;
