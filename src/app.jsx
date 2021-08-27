import "./app.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import Navbar from "./components/navbar";

const App = () => {
  const API_KEY = "AIzaSyDtHaEDsyl-2LEN83CsPcViiAyk_vjVnmM";
  let query = `bts`;

  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items))
      .catch((error) => console.log("error", error));
  }, [videos]);

  useEffect(() => {
    const searchOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&key=${API_KEY}`,
      searchOptions
    )
      .then((response) => response.json())
      .then((data) => setSearch(data))
      .catch((error) => console.log("error", error));
  }, [search]);

  const handleSearch = (text) => {
    query = text;
    return query;
  };

  return (
    <section className="video_constructor">
      <Navbar onSearch={handleSearch} />
      <VideoList videos={videos} />
    </section>
  );
};

export default App;
