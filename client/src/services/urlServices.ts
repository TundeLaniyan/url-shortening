import axios from "axios";
import { get } from "lodash";

const api = "http://localhost:1515/api/v1/url/";

export const getAll = async () => {
  try {
    const response = await axios.get(api);
    return get(response, "data.url", "ohhs something went wrong");
  } catch (e) {
    alert(get(e, "message", "ohhs something went wrong"));
    return [];
  }
};

export const getUrl = async (shortUrl: string) => {
  try {
    const response = await axios.get(api + shortUrl);
    return get(response, "data.url.longUrl", "ohhs something went wrong");
  } catch (e) {
    console.log({ e });
    alert("Page not found");
  }
};

export const addUrl = async (longUrl: string) => {
  try {
    const response = await axios.post(api, { longUrl });
    return get(response, "data.url", "ohhs something went wrong");
  } catch (e) {
    return {
      message: get(e, "response.data.message", "ohhs something went wrong"),
    };
  }
};
