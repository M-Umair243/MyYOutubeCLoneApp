import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_10Logo from "/images/Thumbnail-Imgs/img10_logo.jpg";
import Video_9 from "/Video/PlayVideo_08.mp4";

function ThumbnailVideo_09(props) {
  return (
    <div>
    <Navbar userDataHandler={props.userDataHandler}/>
    <ThumbnailVideo
    userData={props.userData}
      video={Video_9}
      videoTitle="Highest Chase in ODI History By Pakistan Against Australia | Pakistan vs Australia"
      logo={Img_10Logo}
      channelName="Sports Central"
    />
  </div>
  )
}

export default ThumbnailVideo_09
