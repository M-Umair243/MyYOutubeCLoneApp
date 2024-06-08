
import "./Thumbnail.css";
import { Link } from "react-router-dom";
function Thumbnail(props) {

  return (
   
      <>
     
   
      <Link to={props.link} className="image_section">
        <img src={props.ThumbnailImg} alt="" />
      </Link>
      <div className="infoSection">
        <div className="logo">
          <img src={props.icon} alt="" />
        </div>
        <div className="text_section">
          <h3 className="description">
           {props.discription}
          </h3>
          <p className="title">{props.channelName}</p>
          <p className="views">{props.views}</p>
        </div>
      </div>
      </>
  );
}

export default Thumbnail;
