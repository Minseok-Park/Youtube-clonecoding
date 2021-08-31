import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeFetch from "./service/youtube-fetch";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/ve",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new YoutubeFetch(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
