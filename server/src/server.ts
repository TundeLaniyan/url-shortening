import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./config.env" });

const DB =
  process.env.NODE_ENV === "production"
    ? (process.env as { DATABASE: string }).DATABASE.replace(
        "<DATABASE>",
        "shortning-prod"
      )
    : (process.env as { DATABASE: string }).DATABASE.replace(
        "<DATABASE>",
        "shortning-dev"
      );

mongoose
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
