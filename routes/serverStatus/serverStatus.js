import express from "express";
import { serverStatusController } from "../../controller/serverStatus.controller.js";

const router = express.Router();

router.get("/", serverStatusController);

export default router;
