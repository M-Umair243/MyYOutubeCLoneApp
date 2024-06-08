import React from "react";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Video_3 from "/Video/PlayVideo_03.mp4";
import Img_4Logo from "/images/Thumbnail-Imgs/img4_logo.jpg";

function ThumbnailVideo_03(props) {
  return (
    <div>
      <Navbar userDataHandler={props.userDataHandler}/>
      <ThumbnailVideo
      userData={props.userData}
        video={Video_3}
        videoTitle=" 
        Main Aseer e Mohabbat Ho Gaya - Adnan Dhool - Dope Lyrics Urdu"
        logo={Img_4Logo}
        channelName="Dope Lyrics Urdu"
      />
    </div>
  );
}

export default ThumbnailVideo_03;
