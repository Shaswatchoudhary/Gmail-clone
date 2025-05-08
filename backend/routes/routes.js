import express from "express";
import { saveEmail } from "../controller/email-controller.js";

const router = express.Router();

router.post("/save",saveEmail)

export default router
