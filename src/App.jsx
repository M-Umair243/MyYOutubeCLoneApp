import { useState } from "react";

import "./App.css";
import Home from "./assets/Components/HomePage/Home";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThumbnailVideo_01 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_01";
import ThumbnailVideo_02 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_02";
import ThumbnailVideo_03 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_03";
import ThumbnailVideo_04 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_04";
import ThumbnailVideo_05 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_05";
import ThumbnailVideo_06 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_06";
import ThumbnailVideo_07 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_07";
import ThumbnailVideo_08 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_08";
import ThumbnailVideo_09 from "./assets/Components/HomePage/ThumbPlayVideos/ThumbnailVideo_09";
import Subscription from "./assets/Components/Subscription/Subscription";
import Shorts from "./assets/Components/Shorts/Shorts";

function App() {
  const [IsPlayVideo, setIsPlayVideo] = useState(false);
  const [userData, setuserData] = useState(true);
  // const [show, setShow] = useState(true);
  const toggle = () => {
    setIsPlayVideo(!IsPlayVideo);
    console.log("This is PlayVideo");
  };
  const userDataHandler = () => {
    setuserData(!userData);
    console.log("this is button");
  };
  // const showHandler = () => {
  //   setShow(!show);
  //   console.log("this is button");
  // };
  return (
    <div className="App_section">
      {/* {!IsPlayVideo? <Home toggle={toggle}/>:<PlayVideo/>}

      <PlayVideo_01/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home userDataHandler={userDataHandler} userData={userData} />
            }
          />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Shorts" element={<Shorts/>} />
      

          <Route
            path="/ThumbnailVideo_01"
            element={
              <ThumbnailVideo_01
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_02"
            element={
              <ThumbnailVideo_02
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_03"
            element={
              <ThumbnailVideo_03
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_04"
            element={
              <ThumbnailVideo_04
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_05"
            element={
              <ThumbnailVideo_05
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_06"
            element={
              <ThumbnailVideo_06
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_07"
            element={
              <ThumbnailVideo_07
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_08"
            element={
              <ThumbnailVideo_08
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
          <Route
            path="/ThumbnailVideo_09"
            element={
              <ThumbnailVideo_09
                userDataHandler={userDataHandler}
                userData={userData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
