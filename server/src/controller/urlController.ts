import Url, { urlInterface } from "../module/urlModule";
import validUrl from "valid-url";
import randomstring from "randomstring";
import { RequestHandler } from "express";

export const addUrl: RequestHandler = async (req, res) => {
  const { longUrl } = req.body;

  // Check if URL is valid
  if (validUrl.isUri(longUrl)) {
    // Check if url already exists in database
    const url = await Url.findOne({ longUrl });
    if (!url) {
      let shortUrl: string = "";

      const uniqueShorturl = async () => {
        shortUrl = randomstring.generate({
          length: 8,
          charset: "alphanumeric",
          capitalization: "lowercase",
        });
        const unique = await Url.findOne({ shortUrl });
        unique && uniqueShorturl();
      };
      uniqueShorturl();

      // Store url in  database
      const newUrl = await Url.create<urlInterface>({ longUrl, shortUrl });

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

export const findUrl: RequestHandler = async (req, res) => {
  const { shortUrl } = req.params;

  // Search database for url
  const url: urlInterface | null = await Url.findOne({ shortUrl });

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

export const findAllUrl: RequestHandler = async (req, res) => {
  // Search database for all url
  const url = await Url.find();

  // Reverse the url order
  url.reverse();

  // Send url to client
  return res.status(200).json({
    status: "success",
    url,
  });
};
