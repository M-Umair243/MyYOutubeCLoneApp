import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_7Logo from "/images/Thumbnail-Imgs/img07_logo.jpg";
import Video_6 from "/Video/PlayVideo_06.mp4";

function ThumbnailVideo_06(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_6}
        videoTitle="5 Soul healing Nasheeds' 🤍| Arabic Nasheed | Muhammad Al Muqit #nasheed"
        logo={Img_7Logo}
        channelName="Nasheed YT"
      />
    </div>
  );
}

export default ThumbnailVideo_06;
