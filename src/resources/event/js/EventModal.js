import classes from "../css/EventModal.module.css";

const EventModal = (props) => {
  return (
    <div className={classes.eventmodal_mainoverlay}>
      <div
        className={classes.eventmodal_leftoverlay}
        style={{ backgroundColor: props.color }}
      >
        <img src={props.status_img} height="20" />
        <p>{props.status}</p>
      </div>
      <div className={classes.eventmodal_rightoverlay}>
        <div className={classes.eventmodal_eventname}>
          <h5>{props.title}</h5>
        </div>
        <span className={classes.eventmodal_location}>
          <p style={{ fontWeight: "bold" }}>Location</p>
          <p style={{ color: "blue" }}>{props.location}</p>
        </span>
        <div className={classes.eventmodal_date}>
          <div className={classes.eventmodal_startdate}>
            <p style={{ fontWeight: "bold" }}>Starts:</p>
            <p>{props.startdate}</p>
          </div>
          <div className={classes.eventmodal_enddate}>
            <p style={{ fontWeight: "bold" }}>Ends:</p>
            <p>{props.enddate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
