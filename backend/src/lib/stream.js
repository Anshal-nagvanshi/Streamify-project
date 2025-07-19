import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey ||!apiSecret) {
    console.error("Stream API key or  Scret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);