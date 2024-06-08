import React, { useEffect, useRef, useState } from "react";
import "./Shorts.css";
import Img_2Logo from "/images/Thumbnail-Imgs/coding.jpg";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
function ShortsData(props) {
  // const [visible, setVisible] = useState(true);

  const videRef = useRef();

  const handlePlay = () => {
    videRef.current.play();
  };
  const handlePause = () => {
    videRef.current.pause();
  };
  return (
    <div className="Shorts_Wrapper">
      <div className="short_Vids">
        <video ref={videRef} src={props.video}></video>

        <div className="text_content">
          <div className="logoSection">
            <img className="vids_logo" src={Img_2Logo} alt="" />
            <h2>{props.channelName}</h2>
            <a className="subscribeBtn" href="#">
              {props.btn}
            </a>
          </div>
          <p>
            Coding - Expectation vs Reality | Programming - Expectation vs
            Reality | Codeiyapa #Shorts
          </p>
        </div>

        <FaPlay className="playBtn" onClick={handlePlay} />
        <FaPause className="pauseBtn" onClick={handlePause} />
      </div>
      <div className="rightBtns">
        <div className="likedbtn">
          <AiFillLike className="btn" />
          <span>455k</span>
        </div>
        <div className="likedbtn">
          <BiSolidDislike className="btn" />
          <span>Dislike</span>
        </div>
        <div className="likedbtn">
          <BiSolidMessageDetail className="btn" />
          <span>7,110</span>
        </div>
        <div className="likedbtn">
          <IoMdShareAlt className="btn" />
          <span>Share</span>
        </div>
        <div className="likedbtn">
          <BsThreeDotsVertical className="btn" />
        </div>
        <div className="logo">
          <img src={Img_2Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShortsData;
