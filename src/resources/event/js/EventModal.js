import classes from "../css/EventModal.module.css";

const EventModal = (props) => {
  return (
    <div className={classes.eventmodal_mainoverlay}>
      <div className={classes.eventmodal_leftoverlay}>
        <img
          src="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
          height="20"
        />
        <p>Completed</p>
      </div>
      <p>{props.title}</p>
      <p>{props.location}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default EventModal;
