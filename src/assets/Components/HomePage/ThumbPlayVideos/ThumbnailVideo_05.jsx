import React from "react";
import "./ThumbnailVideo.css";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Img_6Logo from "/images/Thumbnail-Imgs/img06_logo.jpg";
import Video_5 from "/Video/PlayVideo_05.mp4";

function ThumbnailVideo_05(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_5}
        videoTitle="Ab Yad Na Aao Rehne Do || Heart touching kalam🥹|| slow and reverb +
        lyrics#phalistine"
        logo={Img_6Logo}
        channelName="Zia -ul_ Quran"
      />
    </div>
  );
}

export default ThumbnailVideo_05;
