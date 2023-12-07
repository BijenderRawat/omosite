import classes from "../css/HomePageBody.module.css";

const HomePageBody = () => {
  return (
    <main className={classes.home_main_section}>
      <div className={classes.gallery_slide}>
        <div className={classes.container}>
          <img
            src="https://onmyowntechnology.com/images/omotec-competitions.webp"
            height="300"
            width="350"
          />
          <div className={classes.overlay}>
            <div className={classes.text}>OMOTEC at WRO</div>
          </div>
        </div>
        <div className={classes.container}>
          <img
            src="https://onmyowntechnology.com/omotec/team_photo.jpg"
            height="300"
            width="350"
          />
          <div className={classes.overlay}>
            <div className={classes.text}>Some of Us</div>
          </div>
        </div>
        <div className={classes.container}>
          <img
            src="https://static.businessworld.in/article/article_extra_large_image/1634177699_sKtAoA_232A0268_1_.JPG"
            height="300"
            width="350"
          />
          <div className={classes.overlay}>
            <div className={classes.text}>Event Highlight</div>
          </div>
        </div>
        <div className={classes.container}>
          <img
            src="https://i.ytimg.com/vi/7QTmJ60Cmg8/maxresdefault.jpg"
            height="300"
            width="350"
          />
          <div className={classes.overlay}>
            <div className={classes.text}>Competition Training</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="90%"
          height="500"
          src=""
          title="CONGRATULATIONS TO OUR WRO WINNERS"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
};

export default HomePageBody;
