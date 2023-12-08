import { Link } from "react-router-dom";

import MainNavigation from "../../navigation/js/MainNavigation";

import classes from "../css/HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <div className={classes.header}>
      <ul className={classes.left_list}>
        <li className={classes.list_omotec_logo}>
          <Link to="/home">
            <img
              src="https://onmyowntechnology.com/images/omotec_logo.png"
              alt="OMOTEC Logo"
            />
          </Link>
        </li>
      </ul>
      <div className={classes.hashtag_section}>
        <div className={classes.hashtag_section_space}></div>
        <p>#SharingIsCarying</p>
      </div>
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
