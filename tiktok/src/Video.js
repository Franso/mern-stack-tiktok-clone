import React, { useState } from "react";
import "./Video.css";
import { useRef } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, song, description, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing
    //stop it...
    //otherwise if its not playing
    //play it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      {/* <video src="https://www.tiktok.com/@neonconstructionl/video/6872930896580726017"> */}
      {/* videoFooter */}
      {/* videoSideBar */}
      {/* </video> */}
      <iframe
        className="video__player"
        loop
        ref={videoRef}
        // width="560"
        width="1366"
        // height="315"
        height="708"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* Video footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* video sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
