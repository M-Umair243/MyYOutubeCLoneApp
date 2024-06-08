
import "./UserDetail.css";
import SlideBarData from "../SlideBar/SlideBarData";
import UserLogo from "/images/user-nav.jpg";
import GoogleAccount from "/images/userSvg/google.svg";
import SwitchAccount from "/images/userSvg/account.svg";
import SignIn from "/images/userSvg/sign in.svg";
import YtStudio from "/images/userSvg/yt studio.svg";
import Perchases from "/images/userSvg/purchases.svg";
import YourData from "/images/userSvg/data.svg";
import Mode from "/images/userSvg/mode.svg";
import Languages from "/images/userSvg/languages.svg";
import RestrictionMode from "/images/userSvg/restricted.svg";
import Location from "/images/userSvg/location.svg";
import Keyboard from "/images/userSvg/keyboard.svg";
// import Setting from "images/userSvg/setting.svg";
import Help from "/images/userSvg/help.svg";
import FeedBack from "/images/userSvg/feedback.svg";
import RightArrow from "/images/userSvg/right arrow.svg";
// import UserData from "./UserData.jsx";
function UserDetail(props) {
  return (
    // "userDetails"
    <div className={!props.userData ? "userDetails" : "NoNuserDetails"}>
      <div className="upperSection">
        <div className="icon">
          <img src={UserLogo} alt="" />
        </div>
        <div className="text">
          <p>Code with Marry</p>
          <p>@Codingbymarry</p>
          <div className="viewChannel">view your channel</div>
        </div>
      </div>
      <div className="underlineBorder"></div>
      {/* <UserData icon={GoogleAccount} text="Google Account" /> */}
      <div className="wrapper">
        <div className="content">
          <SlideBarData icon={GoogleAccount} text="Google Account" />
          <SlideBarData
            icon={SwitchAccount}
            text="Switch Account"
            streaming={RightArrow}
          />
          <SlideBarData icon={SignIn} text="Sign Out" />
        </div>
        <div className="underlineBorder"></div>
        <div className="content">
          <SlideBarData icon={YtStudio} text="Youtube studio" />
          <SlideBarData icon={Perchases} text="Purchases and member" />
        </div>
        <div className="underlineBorder"></div>
        <div className="content">
          <SlideBarData icon={YourData} text="Your data in Youtube" />
          <SlideBarData
            icon={Mode}
            text="Apperance : Dark"
            streaming={RightArrow}
          />
          <SlideBarData
            icon={Languages}
            text="Language : English"
            streaming={RightArrow}
          />
          <SlideBarData
            icon={RestrictionMode}
            text="Restriction Mode : off"
            streaming={RightArrow}
          />
          <SlideBarData
            icon={Location}
            text="Location : Pakistan"
            streaming={RightArrow}
          />
          <SlideBarData icon={Keyboard} text="Keyboard shortcuts" />
        </div>
        <div className="underlineBorder"></div>
        <div className="content">
          <SlideBarData icon={YourData} text="Settings" />
        </div>
        <div className="underlineBorder"></div>
        <div className="content">
          <SlideBarData icon={Help} text="Help" />
          <SlideBarData icon={FeedBack} text="Send Feedback" />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
