import CollateralModal from "../../../resources/collateral/js/CollateralModal";
import classes from "../css/Collateral.module.css";

const Collateral = () => {
  return (
    <div className={classes.collateral_list}>
      <div className={classes.collateral_leftlist}>
        <CollateralModal
          subjectname="Python Programming"
          subject_img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
        />
        <CollateralModal
          subjectname="C++ Programming"
          subject_img="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"
        />
        <CollateralModal
          subjectname="3D Designing"
          subject_img="https://cdn.create.vista.com/api/media/small/471198122/stock-vector-printer-printing-letters-blue-gradient-vector-icon"
        />
      </div>
      <div className={classes.collateral_middlelist}>
        <CollateralModal
          subjectname="Automation"
          subject_img="https://e7.pngegg.com/pngimages/586/377/png-clipart-sql-for-dummies-database-computer-icons-sql-server-reporting-services-text-logo.png"
        />
        <CollateralModal
          subjectname="Mechanical Building"
          subject_img="https://banner2.cleanpng.com/20180710/qjp/kisspng-javascript-computer-programming-scripting-language-java-script-5b457409e8e0d2.0863329115312783459539.jpg"
        />
        <CollateralModal
          subjectname="LEGO Robotics"
          subject_img="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png"
        />
      </div>
      <div className={classes.collateral_rightlist}>
        <CollateralModal
          subjectname="Block Coding"
          subject_img="https://cdn.icon-icons.com/icons2/2248/PNG/512/language_r_icon_138432.png"
        />
        <CollateralModal
          subjectname="App Development"
          subject_img="https://cdn-icons-png.flaticon.com/512/152/152760.png"
        />
        <CollateralModal subjectname="View All Tutorials ->" isLink={true} />
      </div>
    </div>
  );
};

export default Collateral;
