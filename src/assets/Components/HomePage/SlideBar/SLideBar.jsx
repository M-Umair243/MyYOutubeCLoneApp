import SlideBarData from "./SlideBarData";
import HomeSvg from "/images/slidebar/home.svg";
import ShortsSvg from "/images/slidebar/shorts.svg";
import SubscriptionSvg from "/images/slidebar/subscriber.svg";
import YourChannelSvg from "/images/slidebar/yt-channel.svg";
import HistorySvg from "/images/slidebar/history.svg";
import PlaylistSvg from "/images/slidebar/playlist.svg";
import YourVideoSvg from "/images/slidebar/yourvideo.svg";
import WatchLaterSvg from "/images/slidebar/watchlater.svg";
import LikedVideoSvg from "/images/slidebar/liked.svg";
import DownloadSvg from "/images/slidebar/download.svg";
import TrendingSvg from "/images/slidebar/trending.svg";
import MusicSvg from "/images/slidebar/music.svg";
import GamingSvg from "/images/slidebar/gaming.svg";
import NewsSvg from "/images/slidebar/news.svg";
import SportsSvg from "/images/slidebar/sports.svg";
import SettingSvg from "/images/slidebar/setting.svg";
import ReportSvg from "/images/slidebar/report.svg";
import HelpSvg from "/images/slidebar/help.svg";
import FeedBackSvg from "/images/slidebar/feedback.svg";
import RightArrowSvg from "/images/slidebar/rightarrow.svg";
import YtPremiumSvg from "/images/slidebar/yt-premium.svg";
import YtStudioSvg from "/images/slidebar/yt-studio.svg";
import YtMusicSvg from "/images/slidebar/yt-music.svg";
import YtKidsSvg from "/images/slidebar/yt-kids.svg";
import StreamingSvg from "/images/slidebar/streaming.svg";
import News24Img from "/images/slidebar/Subscriptions Icons/24_news hd.png";
import AryNews from "/images/slidebar/Subscriptions Icons/ary.png";
import DunyaNews from "/images/slidebar/Subscriptions Icons/dunya news.png";
import HarPalNews from "/images/slidebar/Subscriptions Icons/har pal news.png";
import HumTv from "/images/slidebar/Subscriptions Icons/hum tv.png";
import Codegrid from "/images/slidebar/Subscriptions Icons/codegrid.png";
import Wscube from "/images/slidebar/Subscriptions Icons/wscube.png";

import "./SlideBar.css";
function SlideBar() {
  return (
    <div className="SlideBarSection">
      <SlideBarData link="/" text="home" icon={HomeSvg} />
      <SlideBarData link="/Shorts" text="shorts" icon={ShortsSvg} />
      <SlideBarData
        link="/Subscription"
        text="subscriptions"
        icon={SubscriptionSvg}
      />
      <div className="border_line"></div>
      <div className="slidebar_heading">
        <div className="text">you</div>
        <div className="icon">
          <img src={RightArrowSvg} alt="right arrow" />
        </div>
      </div>
      <SlideBarData text="your channel" icon={YourChannelSvg} />
      <SlideBarData text="history" icon={HistorySvg} />
      <SlideBarData text="playlist" icon={PlaylistSvg} />
      <SlideBarData text="your Video" icon={YourVideoSvg} />
      <SlideBarData text="watch later" icon={WatchLaterSvg} />
      <SlideBarData text="liked videos" icon={LikedVideoSvg} />
      <SlideBarData text="downloads" icon={DownloadSvg} />
      <div className="border_line"></div>
      <div className="slidebar_heading">
        <div className="text">subscriptions</div>
      </div>
      <SlideBarData
        text="Ary Digital"
        icon={AryNews}
        streaming={StreamingSvg}
      />
      <SlideBarData
        text="24 News HD"
        icon={News24Img}
        streaming={StreamingSvg}
      />
      <SlideBarData
        text="Dunya News"
        icon={DunyaNews}
        streaming={StreamingSvg}
      />
      <SlideBarData
        text="Har Pal News"
        icon={HarPalNews}
        streaming={StreamingSvg}
      />
      <SlideBarData text="Hum TV" icon={HumTv} streaming={StreamingSvg} />
      <SlideBarData text="GreatStacks" icon={Codegrid} />
      <SlideBarData text="WsCube Tech" icon={Wscube} />
      <div className="border_line"></div>
      <div className="slidebar_heading">
        <div className="text">explore</div>
      </div>
      <SlideBarData text="trending" icon={TrendingSvg} />
      <SlideBarData text="music" icon={MusicSvg} />
      <SlideBarData text="gaming" icon={GamingSvg} />
      <SlideBarData text="news" icon={NewsSvg} />
      <SlideBarData text="sports" icon={SportsSvg} />
      <div className="border_line"></div>
      <div className="slidebar_heading">
        <div className="text">more from youTube</div>
      </div>
      <SlideBarData text="youtube premium" icon={YtPremiumSvg} />
      <SlideBarData text="youtube studio" icon={YtStudioSvg} />
      <SlideBarData text="youtube music" icon={YtMusicSvg} />
      <SlideBarData text="youtube kids" icon={YtKidsSvg} />

      <div className="border_line"></div>
      <SlideBarData text="settings" icon={SettingSvg} />
      <SlideBarData text="report history" icon={ReportSvg} />
      <SlideBarData text="help" icon={HelpSvg} />
      <SlideBarData text="send feedback" icon={FeedBackSvg} />
      <div className="border_line"></div>
      <div className="footerText">
        <p>About Press Copyright Contact us Creators Advertise Developers</p>
        <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
        <span>© 2024 Google LLC</span>
      </div>
    </div>
  );
}

export default SlideBar;
