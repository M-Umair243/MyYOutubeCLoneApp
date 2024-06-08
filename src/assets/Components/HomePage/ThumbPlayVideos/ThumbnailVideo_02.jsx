import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_3Logo from "/images/Thumbnail-Imgs/img3-logo.jpg";
import Video_2 from "/Video/PlayVideo_03.mp4";
function ThumbnailVideo_02(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_2}
        videoTitle="Last Lecture : Fetch API with Project | JavaScript Full Course"
        logo={Img_3Logo}
        channelName="Sharda Khapra"
      />
    </div>
  );
}

export default ThumbnailVideo_02;
