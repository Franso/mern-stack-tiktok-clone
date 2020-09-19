import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      {/* <video src="https://www.tiktok.com/@neonconstructionl/video/6872930896580726017"> */}
      {/* videoFooter */}
      {/* videoSideBar */}
      {/* </video> */}
      <iframe
        className="video__player"
        width="560"
        // width="1360"
        // height="315"
        height="708"
        src="https://www.youtube.com/embed/suvwogCC7PI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
