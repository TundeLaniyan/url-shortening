"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlController_1 = require("../controller/urlController");
const router = express_1.default.Router();
router.get("/", urlController_1.findAllUrl);
router.get("/:shortUrl", urlController_1.findUrl);
router.post("/", urlController_1.addUrl);
exports.default = router;
