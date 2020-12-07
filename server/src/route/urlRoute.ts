import express from "express";
import { findAllUrl, findUrl, addUrl } from "../controller/urlController";

const router = express.Router();

router.get("/", findAllUrl);
router.get("/:shortUrl", findUrl);
router.post("/", addUrl);

export default router;
