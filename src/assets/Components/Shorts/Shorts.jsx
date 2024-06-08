import React from "react";
import ShortsData from "./ShortsData";
import "./Shorts.css";
import Navbar from "../HomePage/Navbar/Navbar";
import Shorts_1 from "/ShortsVideos/Shorts_02.mp4";
import Coding from "/images/Thumbnail-Imgs/coding.jpg";
function Shorts() {
  return (
    <div className="Shorts_Section">
      <Navbar />
      <div className="Shorts">
        <ShortsData video={Shorts_1} channelName="@Zee Arts" btn="Subscribe"/>

      </div>
    </div>
  );
}

export default Shorts;
