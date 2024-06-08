import "./SlideBar.css";
import { Link } from "react-router-dom";

function SlideBarData(props) {
  return (
    <div className="slidebar_data">
      <div className="slide_col">
        <Link className="col_content" to={props.link}>
          <div className="icon">
            <img src={props.icon} alt="" />
          </div>
          <div className="text">{props.text}</div>
          <div className="streaming">
            <img src={props.streaming} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SlideBarData;
