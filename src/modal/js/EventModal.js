import classes from "../css/EventModal.module.css";

const EventModal = ({
  title,
  startdate,
  enddate,
  location,
  color,
  status,
  status_img,
}) => {
  return (
    <div className={classes.eventmodal_mainoverlay}>
      <div
        className={classes.eventmodal_leftoverlay}
        style={{ backgroundColor: color }}
      >
        <img src={status_img} alt="Status" height="20" />
        <p>{status}</p>
      </div>
      <div className={classes.eventmodal_rightoverlay}>
        <div className={classes.eventmodal_eventname}>
          <h5>{title}</h5>
        </div>
        <span className={classes.eventmodal_location}>
          <p style={{ fontWeight: "bold" }}>Location</p>
          <p style={{ color: "blue" }}>{location}</p>
        </span>
        <div className={classes.eventmodal_date}>
          <div className={classes.eventmodal_startdate}>
            <p style={{ fontWeight: "bold" }}>Starts:</p>
            <p>{startdate}</p>
          </div>
          <div className={classes.eventmodal_enddate}>
            <p style={{ fontWeight: "bold" }}>Ends:</p>
            <p>{enddate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
