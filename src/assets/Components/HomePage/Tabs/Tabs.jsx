import { useRef, useState } from "react";
import "./Tabs.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Item_width = 1000;
function Tabs() {
  const itemRef = useRef(null);
  const [isMouseDown, setisMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleMouseDown = (e) => {
    setisMouseDown(true);
    setStartX(e.pageX - -itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft);
  };
  const handleMouseLeave = (e) => {
    setisMouseDown(false);
  };
  const handleMouseUp = () => {
    setisMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    itemRef.current.scrollLeft = scrollLeft - walk;
  };
  const handlerScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    itemRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="tabs_section">
      <div className="icon_left"  onClick={() => {
            handlerScroll(-Item_width);
            console.log("this is left");
          }}>
        <div
          className="left"
         
        >
          <FaAngleLeft />
        </div>
      </div>
      <ul
        ref={itemRef}
        className="tabs_box"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <li>All</li>

        <li>web design</li>

        <li>UI / UX</li>

        <li>Coding</li>

        <li>Programing</li>

        <li>Hum TV</li>

        <li>24 News</li>

        <li>Dramas</li>

        <li>Series</li>

        <li>Movies</li>

        <li>Comedy</li>

        <li>Devdas</li>
        <li>Sharda Khapra</li>
        <li>Netflix</li>
        <li>Feroz khan</li>
        <li>Code with Harry</li>
        <li>24 News</li>
        <li>Sare Aam</li>
      </ul>
      <div className="icon_right"  onClick={() => {
            handlerScroll(Item_width);
            console.log("this is right")
          }}>
        <div
          className="right"
         
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
