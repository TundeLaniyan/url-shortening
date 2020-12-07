"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const path_1 = __importDefault(require("path"));
const urlRoute_1 = __importDefault(require("./route/urlRoute"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
// Compress file to gzip
app.use(compression_1.default());
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
// Set security HTTP headers
app.use(helmet_1.default());
// Body parser
app.use(express_1.default.json({ limit: "10kb" }));
// Data sanitization against NoSQL query injection
app.use(express_mongo_sanitize_1.default());
// Data sanitization against XSS
app.use(xss_clean_1.default());
// Rout handler
app.use("/api/v1/url", urlRoute_1.default);
// Client handler
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
module.exports = app;
