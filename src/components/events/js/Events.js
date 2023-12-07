import EventModal from "../../../resources/event/js/EventModal";

import classes from "../css/Events.module.css";

const Events = () => {
  const upcommingcolorcode = "#f37022";
  const completedcolorcode = "#005DA3";

  return (
    <div className={classes.events_list}>
      <EventModal
        title="WSRO Regionals"
        startdate="February 24, 2024"
        enddate="February 24, 2024"
        location="Jaipur"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="WSRO Regionals"
        startdate="February 3, 2024"
        enddate="February 3, 2024"
        location="Pune"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="FTC"
        startdate="January 27, 2024"
        enddate="January 28, 2023"
        location="Pune"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="Vex Competition"
        startdate="January 20, 2024"
        enddate="January 21, 2024"
        location="Garodia School, Mumbai"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="31st Convergence India Expo"
        startdate="January 17, 2024"
        enddate="January 19, 2024"
        location="Delhi"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="Rotary Club Fun Street"
        startdate="December 23, 2023"
        enddate="December 23, 2023"
        location="Powai"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="Annual Function"
        startdate="December 20, 2023"
        enddate="December 20, 2023"
        location="GK Gurukul, Pune"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="World Kid Expo Event"
        startdate="December 16, 2023"
        enddate="December 17, 2023"
        location="NESCO, Mumbai"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="Clara Global Event"
        startdate="YET TO CONFIRM"
        enddate="YET TO CONFIRM"
        location="YET TO CONFIRM"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="Finland International Event"
        startdate="December 9, 2023"
        enddate="December 9, 2023"
        location="Pune"
        color={upcommingcolorcode}
        status="Upcoming"
        status_img="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph"
      />
      <EventModal
        title="ESFE Exhibition"
        startdate="December 4, 2023"
        enddate="December 6, 2023"
        location="BKC MMRDA, Mumbai"
        color={completedcolorcode}
        status="Completed"
        status_img="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
      />
      <EventModal
        title="Robotics Competition"
        startdate="December 2, 2023"
        enddate="December 2, 2023"
        location="Trinity Interschool"
        color={completedcolorcode}
        status="Completed"
        status_img="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
      />
      <EventModal
        title="Principal Event"
        startdate="December 2, 2023"
        enddate="December 2, 2023"
        location="Gurugram"
        color={completedcolorcode}
        status="Completed"
        status_img="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
      />
      <EventModal
        title="Robotic Workshop"
        startdate="December 2, 2023"
        enddate="December 2, 2023"
        location="Cambria International School, Kalyan"
        color={completedcolorcode}
        status="Completed"
        status_img="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
      />
      <EventModal
        title="Eldrok"
        startdate="December 1, 2023"
        enddate="December 1, 2023"
        location="Jaipur"
        color={completedcolorcode}
        status="Completed"
        status_img="https://t4.ftcdn.net/jpg/03/64/95/99/360_F_364959909_nJFBFsTDRsHD3JJIfXZEPbcBd7OSrAWU.jpg"
      />
      {/* <EventModal
        title="Eldrok"
        startdate="November 29, 2023"
        enddate="November 29, 2023"
        location="Delhi"
      />
      <EventModal
        title="Edu Drone Event"
        startdate="November 26, 2023"
        enddate="November 26, 2023"
        location="Pune"
      />
      <EventModal
        title="MIMAMSA"
        startdate="November 25, 2023"
        enddate="November 25, 2023"
        location="Nagpur"
      />
      <EventModal
        title="RITAMBHARA Event"
        startdate="November 25, 2023"
        enddate="November 26, 2023"
        location="Seven Square Academy, Mumbai"
      />
      <EventModal
        title="WRO WORLD"
        startdate="November 7, 2023"
        enddate="November 9, 2023"
        location="Panama"
      />
      <EventModal
        title="Society Event (Colori Phase II)"
        startdate="November 4, 2023"
        enddate="November 5, 2023"
        location="Pune"
      />
      <EventModal
        title="Robotics & Science Exhibition + PTM"
        startdate="November 2, 2023"
        enddate="November 3, 2023"
        location="VKV, Hurda"
      /> */}
    </div>
  );
};

export default Events;
