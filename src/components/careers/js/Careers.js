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
    </section>
  );
};

export default Careers;
