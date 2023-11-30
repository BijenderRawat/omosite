import classes from "../css/HomePageBody.module.css";

const HomePageBody = () => {
  return (
    <main className={classes.home_main_section}>
      <div className={classes.gallery_slide}>
        <img
          src="https://onmyowntechnology.com/images/omotec-competitions.webp"
          height="300"
        />
        <img
          src="https://onmyowntechnology.com/omotec/team_photo.jpg"
          height="300"
        />
        <img
          src="https://static.businessworld.in/article/article_extra_large_image/1634177699_sKtAoA_232A0268_1_.JPG"
          height="300"
        />
        <img
          src="https://i.ytimg.com/vi/7QTmJ60Cmg8/maxresdefault.jpg"
          height="300"
        />
      </div>
      <iframe
        width="1903"
        height="500"
        src="https://www.youtube.com/embed/X0DUjBhm3Cs?list=TLGGGEvqHcHwCo8zMDExMjAyMw"
        title="CONGRATULATIONS TO OUR WRO WINNERS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </main>
  );
};

export default HomePageBody;
