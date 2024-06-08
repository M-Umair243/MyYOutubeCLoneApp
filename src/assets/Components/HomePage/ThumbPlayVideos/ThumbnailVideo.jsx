import React, { useState } from "react";
import "./ThumbnailVideo.css";

import Img_3 from "/images/Thumbnail-Imgs/img_3.webp";
import Img_2 from "/images/Thumbnail-Imgs/img_2.webp";
import Img_4 from "/images/Thumbnail-Imgs/img_4.webp";
import Img_5 from "/images/Thumbnail-Imgs/img_05.webp";
import Img_6 from "/images/Thumbnail-Imgs/img_06.jpg";
import Img_7 from "/images/Thumbnail-Imgs/img_07.webp";
import Img_8 from "/images/Thumbnail-Imgs/img_08.webp";
import Img_9 from "/images/Thumbnail-Imgs/img_09.webp";
import Img_10 from "/images/Thumbnail-Imgs/img_10.jpg";
import LikedSvg from "/images/Play Videos/videos sharing icons/liked.svg";
import UnLikedSvg from "/images/Play Videos/videos sharing icons/unliked.svg";
import ShareSvg from "/images/Play Videos/videos sharing icons/share.svg";
import SaveSvg from "/images/Play Videos/videos sharing icons/save.svg";
import DottedSvg from "/images/Play Videos/videos sharing icons/dots.svg";
import Thumbnail from "../Thumbnail/Thumbnail";
import UserDetail from "../UserDetail/UserDetail";

function ThumbnailVideo(props) {
  const [visible, setVisible] = useState(true);
  const showHandler = () => {
    setVisible(!visible);
    console.log("this is button");
  };
  return (
    <div className="Thumbnail_Section">
      <div className="LeftSection">
        <div className="Video_content">
          <video controls>
            <source src={props.video} />
          </video>
        </div>
        <div className="video_info">
          <h3>{props.videoTitle}</h3>
          <div className="channel_info">
            <div className="leftSide">
              <div className="logo">
                <img src={props.logo} alt="" />
              </div>
              <div className="logo_text">
                <h2>{props.channelName}</h2>
                <span>553k subscribers</span>
              </div>
              <div className="subscribe_btn">
                <a>subscribe</a>
              </div>
            </div>
            <div className="btns_container">
              <div className="btn">
                <img className="liked" src={LikedSvg} alt="liked img" />
                <span className="views">522</span>
                <img className="unliked" src={UnLikedSvg} alt="" />
              </div>

              <div className="btn">
                <img src={ShareSvg} alt="share img" />
                <span>Share</span>
              </div>

              <div className="btn">
                <img src={SaveSvg} alt="save img" />
                <span>save</span>
              </div>
              <div className="btn_2">
                <img src={DottedSvg} alt="doted" />
              </div>
            </div>
          </div>
        </div>
        <div className="Comment_content">
          <div className={!visible ? "collapse_box2" : "collapse_box"}>
            <div className="text" id="collapse_text">
              <p className="text_1">
                7,587,921 views Feb 20, 2024{" "}
                <a href="#">#AbdullahpurKaDevdas</a>
                <a href="#">#Abdullahpur</a>
              </p>
              <p className="text_1">
                Subscribe to <a href="#">@zeezindagiofficial2305</a> to stay
                tuned!
              </p>
              <p className="text_1">
                O Sahib OST | Abdullahpur Ka Devdas | Bilal Abbas, Sarah Khan,
                Raza Talish I Adnan Dhool, Asim Raza
              </p>
              <p className="text_1">
                Fakhar falls in love with Gulbano who is smitten by the poet
                Abdullahpur Ka Devdas whom she has met but never seen. A series
                of events changes the course of Fakhar's life. Will Fakhar be
                able to get his love?
              </p>
              <p className="text_1">Lyricist - Asim Raza</p>
              <p className="text_1">
                Singer - <a href="#">@AdnanDhool</a>,
                <a href="#">@ZainZohaibMusic</a>
              </p>
              <p className="text_1">
                Composer - <a href="#"> @AdnanDhool </a>
              </p>
              <p className="text_1">
                Cast: Bilal Abbas, Sarah Khan, Noman Ejaz, Savera Nadeem, Raza
                Talish, Ali Ansari, Shahzad Nawaz, Anushay Abbasi, Arjumand
                Rahim, Saad Ali Qureshi, Anamta Qureshi, Nida Mumtaz, Noor Ul
                Hassan, Fazal Hussain, Zuhab Khan, Nida Hussain, Adnan Shah
                Tipu, Kashif Hussain
              </p>
              <p className="text_1">Writer: Shahid Dogar</p>
              <p className="text_1">Director: Anjum Shahzad</p>
              <p className="text_1">
                Producer: Shailja Kejriwal, Anjum Shahzad
              </p>
            </div>
            <a onClick={showHandler} className="collapse_btn" id="collapse_btn">
              {!visible ? "See Less" : "See More"}
            </a>
          </div>
          <div className="comments_section">
            <div className="comment_top">
              <h2>119 Comments</h2>
              <div className="icons">
                <img src="images/Play Videos/comments_icon_top.svg" alt="" />
                <span>sort by</span>
              </div>
            </div>
            <div className="comment_section_2">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img_2logo.jpg"
                  alt=""
                />
              </div>
              <div className="comment_input">
                <input
                  className="input"
                  type="text"
                  placeholder="Add a Comment..."
                />
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img_2logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@adnanShoukat</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>easy tutorials for every one</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>544</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img1_logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@UmairMaahi</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>Sir this is very awesome and very helpfull</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>520</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img3-logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@Zohaib Abbas</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>Sir Cane we use another method instead this</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>100</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img4_logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@AbdullahShafique</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>Whats up! can you update this</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>54</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img05_logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@Azeem Khan</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>This is very Greate</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>100</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img06_logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@Zohaib Ali</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>Very Nice</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>14</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_person">
              <div className="logo">
                <img
                  height="40px"
                  width="40px"
                  src="./images/Thumbnail-Imgs/img07_logo.jpg"
                  alt=""
                />
              </div>

              <div className="left_side">
                <div className="text">
                  <div className="span_text">
                    <span>@ALi Raza</span>
                    <span className="text_span">4 months ago</span>
                  </div>
                  <p>It's Good Bro</p>
                  <div className="reply_icon">
                    <div className="likes">
                      <img
                        src="./images/Play Videos/videos sharing icons/liked.svg"
                        alt=""
                      />
                      <span>200</span>
                    </div>
                    <img
                      src="./images/Play Videos/videos sharing icons/unliked.svg"
                      alt=""
                    />
                    <span>reply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="RightSection">
        <div className="video_content">
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_01"
              ThumbnailImg={Img_2}
              discription="Oh Sahib - Abdullahpur Ka Devdas | Full OST"
              channelName="Me&My Stuff"
              views="135k Views. 1 month"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
             link="/ThumbnailVideo_02"
              ThumbnailImg={Img_3}
              discription="Last Lecture : Fetch API with Project | JavaScript Full Course"
              channelName="Sharda Khapra"
              views="277k Views. 4 months ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_03"
              ThumbnailImg={Img_4}
              discription="Main Aseer e Mohabbat Ho Gaya - Adnan Dhool - Dope Lyrics Urdu"
              channelName="Dope Lyrics Urdu"
              views="2.5M Views. 3 years ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_04"
              ThumbnailImg={Img_5}
              discription="PTI In Big Trouble | 9 May Incident | BOL News Headlines At 9 AM | Section 144 Enforced"
              channelName="Bol News"
              views="390k Views. 29 minutes ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_05"
              ThumbnailImg={Img_6}
              discription="Ab Yad Na Aao Rehne Do || Heart touching kalam🥹|| slow and reverb +
                lyrics#phalistine"
              channelName="Zia -ul_ Quran"
              views="180k Views. 1 month ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_06"
              ThumbnailImg={Img_7}
              discription="'5 Soul healing Nasheeds' 🤍| Arabic Nasheed | Muhammad Al Muqit #nasheed"
              channelName="Nasheed YT"
              views="390k Views. 8 months ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_07"
              ThumbnailImg={Img_8}
              discription="Fresher - Front end developer interview 2024 | web developer interview | Reactjs developer interview"
              channelName="coder master"
              views="135k Views. 1 month"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_08"
              ThumbnailImg={Img_9}
              discription="Maa Baap | Amrinder Gill | Simi Chahal | Dr Zeus | Satta Vairowalia |Chal Mera Putt 2 | Rel
           27th Aug"
              channelName="Rhtthim Boyz"
              views="9.8M Views. 2 years ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
            link="/ThumbnailVideo_09"
              ThumbnailImg={Img_10}
              discription="Highest Chase in ODI History By Pakistan Against Australia | Pakistan vs Australia "
              channelName="Sports Central"
              views="9.8M Views. 2 years ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_3}
              discription="Last Lecture : Fetch API with Project | JavaScript Full Course"
              channelName="Sharda Khapra"
              views="277k Views. 4 months ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_4}
              discription="Main Aseer e Mohabbat Ho Gaya - Adnan Dhool - Dope Lyrics Urdu"
              channelName="Dope Lyrics Urdu"
              views="2.5M Views. 3 years ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_5}
              discription="PTI In Big Trouble | 9 May Incident | BOL News Headlines At 9 AM | Section 144 Enforced"
              channelName="Bol News"
              views="390k Views. 29 minutes ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_6}
              discription="Ab Yad Na Aao Rehne Do || Heart touching kalam🥹|| slow and reverb +
                lyrics#phalistine"
              channelName="Zia -ul_ Quran"
              views="180k Views. 1 month ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_7}
              discription="'5 Soul healing Nasheeds' 🤍| Arabic Nasheed | Muhammad Al Muqit #nasheed"
              channelName="Nasheed YT"
              views="390k Views. 8 months ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_8}
              discription="Fresher - Front end developer interview 2024 | web developer interview | Reactjs developer interview"
              channelName="coder master"
              views="135k Views. 1 month"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_9}
              discription="Maa Baap | Amrinder Gill | Simi Chahal | Dr Zeus | Satta Vairowalia |Chal Mera Putt 2 | Rel
           27th Aug"
              channelName="Rhtthim Boyz"
              views="9.8M Views. 2 years ago"
            />
          </div>
          <div className="Video_col">
            <Thumbnail
              ThumbnailImg={Img_10}
              discription="Highest Chase in ODI History By Pakistan Against Australia | Pakistan vs Australia "
              channelName="Sports Central"
              views="9.8M Views. 2 years ago"
            />
          </div>
        </div>
      </div>
      <div className="useDetail">
        <UserDetail userData={props.userData}/>
      </div>
    </div>
  );
}

export default ThumbnailVideo;
