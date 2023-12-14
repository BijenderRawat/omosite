import EventModal from "../../../modal/js/EventModal";
import { eventdata } from "../../../resources/event/EventData";
import classes from "../css/Events.module.css";

const Events = () => {
  return (
    <div className={classes.events_list}>
      {eventdata.map((event) => (
        <EventModal {...event} />
      ))}
    </div>
  );
};

export default Events;
