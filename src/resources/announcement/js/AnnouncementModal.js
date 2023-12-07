import classes from "../css/AnnouncementModal.module.css";

const AnnouncementModal = (props) => {
  return (
    <div className={classes.announcement_mainoverlay}>
      <div className={classes.announcement_leftoverlay}></div>
      <div className={classes.announcement_middleoverlay}>
        <div className={classes.announcement_eventname}>
          <h5>{props.title}</h5>
        </div>
        <span className={classes.announcement_location}>
          <p style={{ fontWeight: "bold" }}></p>
          <p style={{ color: "blue" }}></p>
        </span>
        <div className={classes.announcement_date}>
          <div className={classes.announcement_startdate}>
            <p style={{ fontWeight: "bold" }}>{props.content}</p>
            <p>{props.startdate}</p>
          </div>
          <div className={classes.announcement_enddate}>
            <p style={{ fontWeight: "bold" }}></p>
            <p>{props.enddate}</p>
          </div>
        </div>
      </div>
      <div className={classes.announcement_rightoverlay}></div>
    </div>
  );
};

export default AnnouncementModal;
