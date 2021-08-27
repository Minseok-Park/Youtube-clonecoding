import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos }) => {
  return (
    <ul className="video_list">
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
};

export default VideoList;
