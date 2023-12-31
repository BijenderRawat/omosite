import { Link } from "react-router-dom";
import classes from "../css/Careers.module.css";

const Careers = () => {
  return (
    <section className={classes.main_career_section}>
      <span className={classes.career_title}>CAREERS</span>
      <span className={classes.career_sub_title}>
        <p className={classes.career_content}>Current Opportunities @ OMOTEC</p>
        <p className={classes.career_content}>
          Connect with us on{" "}
          <Link
            to="https://www.linkedin.com/company/onmyowntechnology/"
            target="blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
              alt="Linkedin Logo"
              height="20"
              width="20"
            ></img>
          </Link>
        </p>
      </span>
      <div className={classes.accordion} style={{ display: "flex" }}>
        <div className={classes.left_accordion_card}>
          <div className={classes.left_accordion_card_header}>
            <h5 className={classes.mb_0}>
              <Link
                to="https://www.linkedin.com/jobs/view/3767986049"
                target="blank"
              >
                Branch Manager
              </Link>
            </h5>
          </div>
          <div className={classes.left_accordion_card_header}>
            <h5 className={classes.mb_0}>
              <Link
                to="https://www.linkedin.com/jobs/view/3765789890"
                target="blank"
              >
                Robotics Instructor
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <div className={classes.hashtag_section}>
        <div className={classes.hashtag_section_space}></div>
        <p>#SharingIsCaring</p>
      </div>
    </section>
  );
};

export default Careers;
