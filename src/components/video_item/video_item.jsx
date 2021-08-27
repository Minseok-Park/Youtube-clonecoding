import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video_item">
      <img
        className="video_thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="video_text">
        <strong className="video_title">{video.snippet.title}</strong>
        <span className="video_channel">{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
};

export default VideoItem;
