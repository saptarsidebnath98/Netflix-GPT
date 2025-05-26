import OpenAI from "openai";
import { GITHUB_TOKEN, OPENAI_API_ENDPOINT } from "./constants";

const client = new OpenAI({
  baseURL: OPENAI_API_ENDPOINT,
  apiKey: GITHUB_TOKEN,
  dangerouslyAllowBrowser: true
});

export default client;
