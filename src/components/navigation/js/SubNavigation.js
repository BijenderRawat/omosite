import { Link } from "react-router-dom";
import classes from "../css/SubNavigationSection.module.css";

const SubNavigation = () => {
  return (
    <div className={classes.about_subnavsection}>
      <section className={classes.about_subnavsection_social}>
        <ul className={classes.subnav_list1}>
          <li>
            <Link>
              <img src="../../../resources/images/image"></img>
            </Link>
          </li>
          <li>
            <Link>YouTube</Link>
          </li>
          <li>
            <Link>Linkedin</Link>
          </li>
          <li>
            <Link>FaceBook</Link>
          </li>
        </ul>
      </section>
      <sectio>
        <p></p>
      </sectio>
    </div>
  );
};

export default SubNavigation;
