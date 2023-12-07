import EventModal from "../../../resources/event/js/EventModal";

import classes from "../css/Events.module.css";

const Events = () => {
  return (
    <div className={classes.events_list}>
      <EventModal
        title="WRO WORLD PANAMA"
        date="7th November - 9th November"
        location="Panama"
      />
      <EventModal
        title="WRO WORLD PANAMA"
        date="7th November - 9th November"
        location="Panama"
      />
      <EventModal
        title="WRO WORLD PANAMA"
        date="7th November - 9th November"
        location="Panama"
      />
    </div>
  );
};

export default Events;
