import SmSlideBar from "../SmSlideBar/SmSlideBarData";
import HomeSvg from "/images/slidebar/home.svg";
import ShortsSvg from "/images/slidebar/shorts.svg";
import SubscriptionSvg from "/images/slidebar/subscriber.svg";
import YourVideoSvg from "/images/slidebar/yourvideo.svg";
import DownloadSvg from "/images/slidebar/download.svg";
import "./SmSlideBar.css";
function SmSlide() {
  return (
    <div className="SmSlideBar">
      <SmSlideBar link="/" icon={HomeSvg} text="Home" />
      <SmSlideBar link="/Shorts" icon={ShortsSvg} text="Shorts" />
      <SmSlideBar
        link="/Subscription"
        icon={SubscriptionSvg}
        text="Subscriptions"
      />
      <SmSlideBar icon={YourVideoSvg} text="You" />
      <SmSlideBar icon={DownloadSvg} text="Downloads" />
    </div>
  );
}

export default SmSlide;
