import express from "express";
import { addSubscriber } from "../controller/subscriber.controller.js";

const router = express.Router();

router.post("/", addSubscriber);

export default router;
