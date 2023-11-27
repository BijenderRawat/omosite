import MainNavigation from "../../navigation/js/MainNavigation";

import classes from "../css/HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.left_list}>
        <li>
          <img
            src="https://onmyowntechnology.com/images/omotec_logo.png"
            alt="OMOTEC Logo"
          ></img>
        </li>
      </ul>
      <div className={classes.right_list}>
        <ul>
          <li>
            <MainNavigation />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HomePageHeader;
