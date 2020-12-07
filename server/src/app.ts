import express, { Request, Response, NextFunction } from "express";
import compression from "compression";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import path from "path";
import urlRoute from "./route/urlRoute";
import cors from "cors";

const app = express();

// Compress file to gzip
app.use(compression());

app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

// Set security HTTP headers
app.use(helmet());

// Body parser
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Rout handler
app.use("/api/v1/url", urlRoute);

// Client handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
