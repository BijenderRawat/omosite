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
          <li>
            <Link>
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location delhi"
              />
              Delhi
            </Link>
          </li>
          <li>
            <Link
              to="https://www.google.co.in/maps/place/OMOTEC+-+Juhu/@19.1053006,72.8343765,17z/data=!4m6!3m5!1s0x3be7c9f7c9178887:0xeb55ed845d19750b!8m2!3d19.1052955!4d72.8365652!16s%2Fg%2F11hz19r0bh?hl=en&entry=ttu"
              target="blacnk"
              alt="location juhu"
            >
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location lal baug"
              />
              Juhu
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location lokhandwala"
              />
              Lal Baug
            </Link>
          </li>
          <li>
            <Link
              to="https://www.google.co.in/maps/place/OMOTEC+-+Lokhandwala+Andheri/@19.1456676,72.8290599,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b63e3fb039df:0xf461450e6946c4c6!8m2!3d19.1456676!4d72.8290599!16s%2Fg%2F11hc_ty647?hl=en&entry=ttu"
              target="blank"
            >
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location powai"
              />
              Lokhandwala
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location powai"
              />
              Powai
            </Link>
          </li>
          <li>
            <Link
              to="https://www.google.com/maps/place/OMOTEC+-+Pune/@18.464346,73.9235621,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c35f3718466b:0x89a4916e06cb9483!8m2!3d18.464346!4d73.9235621!16s%2Fg%2F11hy_6hw4g?entry=ttu"
              target="blank"
            >
              <img
                src="https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"
                height="20"
                alt="location pune"
              />
              Pune
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SubNavigation;
