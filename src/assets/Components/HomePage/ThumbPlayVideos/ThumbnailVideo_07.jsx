import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_8Logo from "/images/Thumbnail-Imgs/img08_logo.jpg";
import Video_7 from "/Video/PlayVideo_07.mp4";

function ThumbnailVideo_07(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_7}
        videoTitle="Fresher - Front end developer interview 2024 | web developer interview | Reactjs developer interview"
        logo={Img_8Logo}
        channelName="coder master"
      />
    </div>
  );
}

export default ThumbnailVideo_07;
