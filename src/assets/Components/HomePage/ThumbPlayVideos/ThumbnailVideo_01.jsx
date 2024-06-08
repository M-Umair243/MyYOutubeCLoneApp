import React from "react";
import ThumbnailVideo from "./ThumbnailVideo";
import Navbar from "../Navbar/Navbar";
import Video_1 from "/Video/PlayVideo_01.mp4";
import Img_2Logo from "/images/Thumbnail-Imgs/img_2logo.jpg";
function ThumbnailVideo_01(props) {
  return (
    <div>
      <Navbar
      
       userDataHandler={props.userDataHandler} />
      <ThumbnailVideo
      userData={props.userData}
        video={Video_1}
        videoTitle="  Abdullahpur Ka Devdas | O Sahib OST | Bilal Abbas, Sarah Khan, Raza
            Talish I Adnan Dhool, Asim Raza"
        logo={Img_2Logo}
        channelName="Zee Zindagi"
      />
    </div>
  );
}

export default ThumbnailVideo_01;
