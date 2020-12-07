"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: "./config.env" });
const DB = process.env.NODE_ENV === "production"
    ? process.env.DATABASE.replace("<DATABASE>", "shortning-prod")
    : process.env.DATABASE.replace("<DATABASE>", "shortning-dev");
mongoose_1.default
    .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then((con) => console.log("DB connection successful!"))
    .catch((err) => console.error("err"));
const app = require("./app.js");
const port = process.env.PORT || 1515;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
