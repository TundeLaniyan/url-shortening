"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUrl = exports.findUrl = exports.addUrl = void 0;
const urlModule_1 = __importDefault(require("../module/urlModule"));
const valid_url_1 = __importDefault(require("valid-url"));
const randomstring_1 = __importDefault(require("randomstring"));
exports.addUrl = async (req, res) => {
    const { longUrl } = req.body;
    // Check if URL is valid
    if (valid_url_1.default.isUri(longUrl)) {
        // Check if url already exists in database
        const url = await urlModule_1.default.findOne({ longUrl });
        if (!url) {
            let shortUrl = "";
            const uniqueShorturl = async () => {
                shortUrl = randomstring_1.default.generate({
                    length: 8,
                    charset: "alphanumeric",
                    capitalization: "lowercase",
                });
                const unique = await urlModule_1.default.findOne({ shortUrl });
                unique && uniqueShorturl();
            };
            uniqueShorturl();
            // Store url in  database
            const newUrl = await urlModule_1.default.create({ longUrl, shortUrl });
            // Send url to client
            return res.status(201).json({
                status: "success",
                url: newUrl,
            });
        }
        // Send url to client
        return res.status(200).json({
            status: "success",
            url,
        });
    }
    // Send error message to client
    return res.status(400).json({
        status: "fail",
        message: "Invalid Url, Please send valid Url",
    });
};
exports.findUrl = async (req, res) => {
    const { shortUrl } = req.params;
    // Search database for url
    const url = await urlModule_1.default.findOne({ shortUrl });
    if (url) {
        // Send url to client
        return res.status(200).json({
            status: "success",
            url,
        });
        // .redirect(200, url.longUrl)
    }
    // Send error message to client
    return res.status(400).json({
        status: "fail",
        message: "Url not found",
    });
};
exports.findAllUrl = async (req, res) => {
    // Search database for all url
    const url = await urlModule_1.default.find();
    // Reverse the url order
    url.reverse();
    // Send url to client
    return res.status(200).json({
        status: "success",
        url,
    });
};
