import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

const App = () => {
  const API_KEY = "AIzaSyDtHaEDsyl-2LEN83CsPcViiAyk_vjVnmM";
  let query = `bts`;

  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const searchOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=${API_KEY}`,
      searchOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

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

  const handleSearch = (text) => {
    query = text;
    return query;
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
