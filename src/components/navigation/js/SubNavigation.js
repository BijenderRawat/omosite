import classes from "../css/SubNavigationSection.module.css";

import { subnavsocialdata } from "../../../resources/subnavigationmodal/SubNavigationData";
import { subnavlocationdata } from "../../../resources/subnavigationmodal/SubNavigationData";
import SubNavigationModal from "../../../resources/subnavigationmodal/SubNavigationModal";

const SubNavigation = () => {
  return (
    <div className={classes.about_subnavsection}>
      <section className={classes.about_subnavsection_social}>
        <ul className={classes.subnav_list1}>
          {subnavsocialdata.map((item) => (
            <SubNavigationModal {...item} />
          ))}
        </ul>
      </section>
      <section className={classes.about_subnavsection_links}>
        <ul className={classes.subnav_list2}>
          {subnavlocationdata.map((item) => (
            <SubNavigationModal {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SubNavigation;
