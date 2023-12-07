import { Link } from "react-router-dom";

import classes from "../css/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.mainnav_header}>
      <nav>
        <ul className={classes.mainnav_list}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
          <li>
            <Link to="announcement">Announcement</Link>
          </li>
          <li>
            <Link to="careers">Careers</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
