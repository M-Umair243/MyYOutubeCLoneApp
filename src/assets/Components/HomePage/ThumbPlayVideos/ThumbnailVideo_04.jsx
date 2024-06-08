import React from "react";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Video_4 from "/Video/PlayVideo_04.mp4";
import Img_5Logo from "/images/Thumbnail-Imgs/img05_logo.jpg";

function ThumbnailVideo_04(props) {
  return (
    <div>
    <Navbar userDataHandler={props.userDataHandler}/>
    <ThumbnailVideo
    userData={props.userData}
      video={Video_4}
      videoTitle="PTI In Big Trouble | 9 May Incident | BOL News Headlines At 9 AM | Section 144 Enforced"
      logo={Img_5Logo}
      channelName="Bol News"
    />
  </div>
  )
}

export default ThumbnailVideo_04
