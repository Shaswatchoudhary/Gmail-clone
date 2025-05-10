import express from "express";
import { saveEmail } from "../controller/email-controller.js";
import { getEmails } from "../controller/email-controller.js";
import { moveEmailsToBin , toggleStarredMails } from "../controller/email-controller.js";
const router = express.Router();

router.post("/save",saveEmail)
router.get("/emails/:type",getEmails)
router.post("/save-draft",saveEmail)
router.post("/bin",moveEmailsToBin)
router.post("/starred",toggleStarredMails)

export default router
