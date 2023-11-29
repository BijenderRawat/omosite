import classes from "../css/HomePageBody.module.css";

const HomePageBody = () => {
  return (
    <main className={classes.home_main_section}>
      <div className={classes.gallery_slide}>
        <img
          src="https://www.eldrok.com/EIKS-DEL-2023/assets/img/gallery/6.jpg"
          height="200"
        />
        <img
          src="https://www.eldrok.com/EIKS-DEL-2023/assets/img/gallery/6.jpg"
          height="200"
        />
        <img
          src="https://www.eldrok.com/EIKS-DEL-2023/assets/img/gallery/6.jpg"
          height="200"
        />
        <img
          src="https://www.eldrok.com/EIKS-DEL-2023/assets/img/gallery/6.jpg"
          height="200"
        />
      </div>
    </main>
  );
};

export default HomePageBody;
