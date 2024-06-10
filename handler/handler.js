import express from "express";
import paramsHandle from "../controllers/paramsHandler.js";
import queryHandle from "../controllers/queryHandler.js";
import {Router} from "express";
const router = Router();
router.use(express.json());

router.post("/trainingv1.0", queryHandle);
router.post("/:number", paramsHandle);

export default router;
