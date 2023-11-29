import { Link } from "react-router-dom";
import classes from "../css/SubNavigationSection.module.css";

const SubNavigation = () => {
  return (
    <div className={classes.about_subnavsection}>
      <section className={classes.about_subnavsection_social}>
        <ul className={classes.subnav_list1}>
          <li>
            <Link
              to="https://www.instagram.com/onmyowntechnology/"
              target="blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                height="20"
                width="20"
                alt="Instagram Logo"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/company/onmyowntechnology/"
              target="blank"
            >
              <img
                src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
                height="20"
                width="20"
                alt="Linkedin Logo"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/onmyowntechnology/"
              target="blank"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2368/PNG/512/facebook_logo_icon_143786.png"
                height="20"
                width="20"
                alt="Facebook Logo"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com/c/OnMyOwnTechnology"
              target="blank"
            >
              <img
                src="https://www.svgrepo.com/show/308977/youtube-play-button-play-video-youtube-logo.svg"
                height="20"
                width="20"
                alt="YouTube Logo"
              />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/OMOTECHINDIA" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
                height="20"
                width="20"
                alt="Twitter Logo"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send/?phone=917045200303&text=Hey+there%2C+I+visited+your+website+and+want+to+know+more+about+OMOTEC&type=phone_number&app_absent=0"
              target="blank"
            >
              <img
                src="https://www.svgrepo.com/download/106976/whatsapp.svg"
                height="20"
                width="20"
                alt="Whatsapp Logo"
              />
            </Link>
          </li>
        </ul>
      </section>
      <section className={classes.about_subnavsection_links}>
        <ul className={classes.subnav_list2}>
          <li>About</li>
          <li>News</li>
          <li>Announcement</li>
          <li>Careers</li>
        </ul>
      </section>
    </div>
  );
};

export default SubNavigation;
