import { Link } from "react-router-dom";

function SmSlideBarData(props) {
  return (
    <div className="SmSlideBarData">
      <div className="wrapper">
        <div className="col">
          <Link to={props.link} className="content">
            <div className="icon">
              <img src={props.icon} alt="icons" />
            </div>
            <div className="text">{props.text}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmSlideBarData;
