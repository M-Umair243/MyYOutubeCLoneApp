import React from "react";
import { useState } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import Thumbnail from "../HomePage/Thumbnail/Thumbnail";
import Img_2 from "/images/Thumbnail-Imgs/img_2.webp";
import Img_3 from "/images/Thumbnail-Imgs/img_3.webp";
import Img_4 from "/images/Thumbnail-Imgs/img_4.webp";
import Img_5 from "/images/Thumbnail-Imgs/img_05.webp";
import Img_6 from "/images/Thumbnail-Imgs/img_06.jpg";
import Img_7 from "/images/Thumbnail-Imgs/img_07.webp";
import Img_8 from "/images/Thumbnail-Imgs/img_08.webp";
import Img_9 from "/images/Thumbnail-Imgs/img_09.webp";
import Img_10 from "/images/Thumbnail-Imgs/img_10.jpg";
import Img_2Logo from "/images/Thumbnail-Imgs/img_2logo.jpg";
import Img_3Logo from "/images/Thumbnail-Imgs/img3-logo.jpg";
import Img_4Logo from "/images/Thumbnail-Imgs/img4_logo.jpg";
import Img_5Logo from "/images/Thumbnail-Imgs/img05_logo.jpg";
import Img_6Logo from "/images/Thumbnail-Imgs/img06_logo.jpg";
import Img_7Logo from "/images/Thumbnail-Imgs/img07_logo.jpg";
import Img_8Logo from "/images/Thumbnail-Imgs/img08_logo.jpg";
import Img_9Logo from "/images/Thumbnail-Imgs/img09_logo.jpg";
import Img_10Logo from "/images/Thumbnail-Imgs/img10_logo.jpg";
import "./Subscription.css";
import UserDetail from "../HomePage/UserDetail/UserDetail";
import SlideBar from "../HomePage/SlideBar/SLideBar";
import SmSlideBar from "../HomePage/SmSlideBar/SmSlideBar";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { IoIosList } from "react-icons/io";

function Subscription(props) {
  const [show, setShow] = useState(true);
  const [row, setRow] = useState(false);

  const ListHandler = () => {
    setRow(true);
    console.log("this is button");
  };
  const GridHandler = () => {
    setRow(false);
    console.log("this is button");
  };
 
  const showHandler = () => {
    setShow(!show);
    console.log("this is button");
  };
  return (
    <div className="Subscription">
      <Navbar
        toggleHandler={showHandler}
        userDataHandler={props.userDataHandler}
      />
      <div className="slideBar">{!show ? <SmSlideBar /> : <SlideBar />}</div>
      {/* <UserDetail userData={props.userData} /> */}

      <div className={!show ? "newHeroSection " : "HeroSection"}>
        <div className="section_2">
          <h2>Latest</h2>

          <div className="sortBtn">
            <p>Manage</p>
            <div className="btn">
              <BsFillGrid3X2GapFill onClick={GridHandler} className="Grid" />
            </div>
            <div className="btn">
              <IoIosList onClick={ListHandler} className="List" />
            </div>
          </div>
        </div>
        {/* ThumbnailSection */}
        <div className={!row ? " ThumbnailSection" : "NewThumbnailSection"}>
          {/* Thumbnail 1 */}
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_01"
              ThumbnailImg={Img_2}
              icon={Img_2Logo}
              discription="Oh Sahib - Abdullahpur Ka Devdas | Full OST"
              channelName="Me&My Stuff"
              views="135k Views. 1 month"
            />
          </div>
          {/* Thumbnail 2 */}
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_02"
              ThumbnailImg={Img_3}
              icon={Img_3Logo}
              discription="Last Lecture : Fetch API with Project | JavaScript Full Course"
              channelName="Sharda Khapra"
              views="277k Views. 4 months ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_03"
              ThumbnailImg={Img_4}
              icon={Img_4Logo}
              discription="Main Aseer e Mohabbat Ho Gaya - Adnan Dhool - Dope Lyrics Urdu"
              channelName="Dope Lyrics Urdu"
              views="2.5M Views. 3 years ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_04"
              ThumbnailImg={Img_5}
              icon={Img_5Logo}
              discription="PTI In Big Trouble | 9 May Incident | BOL News Headlines At 9 AM | Section 144 Enforced"
              channelName="Bol News"
              views="390k Views. 29 minutes ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_05"
              ThumbnailImg={Img_6}
              icon={Img_6Logo}
              discription="Ab Yad Na Aao Rehne Do || Heart touching kalam🥹|| slow and reverb +
                  lyrics#phalistine"
              channelName="Zia -ul_ Quran"
              views="180k Views. 1 month ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_06"
              ThumbnailImg={Img_7}
              icon={Img_7Logo}
              discription="'5 Soul healing Nasheeds' 🤍| Arabic Nasheed | Muhammad Al Muqit #nasheed"
              channelName="Nasheed YT"
              views="390k Views. 8 months ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_07"
              ThumbnailImg={Img_8}
              icon={Img_8Logo}
              discription="Fresher - Front end developer interview 2024 | web developer interview | Reactjs developer interview"
              channelName="coder master"
              views="135k Views. 1 month"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_08"
              ThumbnailImg={Img_9}
              icon={Img_9Logo}
              discription="Maa Baap | Amrinder Gill | Simi Chahal | Dr Zeus | Satta Vairowalia |Chal Mera Putt 2 | Rel
            27th Aug"
              channelName="Rhtthim Boyz"
              views="9.8M Views. 2 years ago"
            />
          </div>
          <div className="col">
            <Thumbnail
              link="/ThumbnailVideo_09"
              ThumbnailImg={Img_10}
              icon={Img_10Logo}
              discription="Highest Chase in ODI History By Pakistan Against Australia | Pakistan vs Australia "
              channelName="Sports Central"
              views="9.8M Views. 2 years ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
