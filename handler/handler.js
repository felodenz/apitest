import express from "express";
import paramsHandle from "../controllers/paramsHandler.js";
import queryHandle from "../controllers/queryHandler.js";
const router = express.Router();
router.use(express.json());

router.post("/trainingv1.0", queryHandle);
router.post("/:number", paramsHandle);

export default router;
