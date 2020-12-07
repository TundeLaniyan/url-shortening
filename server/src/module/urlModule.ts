import { Schema, model, Document } from "mongoose";

export interface urlInterface {
  longUrl: string;
  shortUrl: string;
}

export interface IUrl extends Document {
  longUrl: string;
  shortUrl: string;
}

const urlSchema = new Schema({
  longUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
});

const Url = model<IUrl>("Url", urlSchema);

export default Url;
