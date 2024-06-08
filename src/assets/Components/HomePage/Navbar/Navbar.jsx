import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Navbar_icons from "./Navbar_icons";
import YtLogo from "/images/youtube-dark-logo.svg";
import NonVisibleSearchIcon from "/images/NavbarIcons/search.svg";
import SearchIcon from "/images/NavbarIcons/search.svg";
import Menu from "/images/NavbarIcons/menu.svg";
import MicrophoneSvg from "/images/NavbarIcons/mice.svg";
import LiveSvg from "/images/NavbarIcons/live.svg";
import NotificationSvg from "/images/NavbarIcons/notification.svg";
import UserIcon from "/images/user-nav.jpg";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const [style, setstyle] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    setstyle(!style);
  };

  useEffect(() => {
    document.addEventListener("click", removeClick);
  }, []);
  const removeClick = (e) => {
    if (!refOne.current.contains(e.target)) {
      setIsActive(false);
      setstyle(true);
    } else {
      setIsActive(true);
      setstyle(false);
    }
  };
  const refOne = useRef(null);

  // isActive ? ' DoVisibile' : 'nonVisibleIcon'
  // "formLeft"
  return (
    <div className="Navbar_section">
      <div className="Navbar_content">
        <div className="leftSide">
          <Navbar_icons img={Menu} showHandler={props.toggleHandler}/>
          <div className="logo_content">
            <Link to="/" className="logo">
              <img src={YtLogo} alt="yt_logo" />
              <div className="logo_text">
                <span>PK</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="middleSide">
          <form action="" className="centerForm">
            <div ref={refOne} className={style ? " newForm" : "formLeft"}>
              <div className={isActive ? " DoVisibile" : "nonVisibleIcon"}>
                <img src={NonVisibleSearchIcon} alt="" />
              </div>
              <div className="search_content" onClick={handleClick}>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="rightForm">
              <img src={SearchIcon} alt="visible search icon" />
            </div>
          </form>
          <div   className="microphoneIcon">
            <Navbar_icons img={MicrophoneSvg} />
          </div>
        </div>
        <div className="rightSide">
          <div className="right_content">
            <div className="liveIcon">
              <Navbar_icons img={LiveSvg} />
            </div>
            <div className="notification">
              <Navbar_icons img={NotificationSvg} />
              <span className="notofication_badge">9+</span>
            </div>
            <div className="userIcon"onClick={props.userDataHandler}>
              <Navbar_icons img={UserIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
