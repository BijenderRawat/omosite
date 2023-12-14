import { Link } from "react-router-dom";

import MainNavigation from "../../navigation/js/MainNavigation";
import omotec_logo from "../../../resources/images/omotec_logo.png";

import classes from "../css/HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <div className={classes.header}>
      <ul className={classes.left_list}>
        <li className={classes.list_omotec_logo}>
          <Link to="/home">
            <img src={omotec_logo} alt="OMOTEC Logo" />
          </Link>
        </li>
      </ul>
      <div className={classes.right_list}>
        <ul>
          <li>
            <MainNavigation />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePageHeader;
