import { Link } from "react-router-dom";
import classes from "../css/SubNavigationSection.module.css";

const SubNavigation = () => {
  return (
    <div className={classes.about_subnavsection}>
      <section className={classes.about_subnavsection_social}>
        <ul className={classes.subnav_list1}>
          <li>
            <Link to="https://www.instagram.com/onmyowntechnology/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                height="20"
                width="20"
                alt="Instagram Logo"
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/company/onmyowntechnology/">
              <img
                src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                height="20"
                width="20"
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/onmyowntechnology/">
              <img
                src="https://store-images.s-microsoft.com/image/apps.37935.13510798886619769.4e5fb71e-c241-41d7-a2f6-59c7ab342dfb.bc476ab8-3523-4507-bd0c-75f9928cdb7b?h=464"
                height="20"
                width="20"
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/c/OnMyOwnTechnology">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
                height="20"
                width="20"
              />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/OMOTECHINDIA">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
                height="20"
                width="20"
              />
            </Link>
          </li>
          <li>
            <Link to="https://api.whatsapp.com/send/?phone=917045200303&text=Hey+there%2C+I+visited+your+website+and+want+to+know+more+about+OMOTEC&type=phone_number&app_absent=0">
              <img
                src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
                height="20"
                width="20"
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
