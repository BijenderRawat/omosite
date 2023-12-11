import { Link } from "react-router-dom";

import { linkarray } from "../../../resources/main_navigation_links/LinkArray.js";

import classes from "../css/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.mainnav_header}>
      <nav>
        <ul className={classes.mainnav_list}>
          {linkarray.map((link) => (
            <li>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
