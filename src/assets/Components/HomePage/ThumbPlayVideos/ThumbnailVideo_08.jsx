import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_9Logo from "/images/Thumbnail-Imgs/img09_logo.jpg";
import Video_8 from "/Video/PlayVideo_08.mp4";

function ThumbnailVideo_08(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_8}
        videoTitle="Maa Baap | Amrinder Gill | Simi Chahal | Dr Zeus | Satta Vairowalia |Chal Mera Putt 2 | Rel
        27th Aug"
        logo={Img_9Logo}
        channelName="Rhtthim Boyz"
      />
    </div>
  );
}

export default ThumbnailVideo_08;
