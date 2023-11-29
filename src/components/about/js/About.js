import classes from "../css/About.module.css";

const About = () => {
  return (
    <div className={classes.main_about_section}>
      <span className={classes.about_title}>ABOUT</span>
      <span className={classes.about_maincontent}>
        On My Own Technology® (OMOTEC®) is an innovative and dynamic STEM,
        Research & Innovation Lab dedicated to bringing STREAM learning to
        students aged 5 to 18+ years | Primary to 12th Grade (K-12), students in
        schools and graduates. Our STEM Labs are in Mumbai, Pune and Delhi, with
        7 branches nationwide. We offer educational programs, both online &
        offline, such as Lego Robotics, Mechanics, Electronics, 3D Design
        Thinking & Printing, AI-ML, IOT & Cybersecurity, Coding & Data Analysis,
        and Research and Innovation for young minds to spark creativity and
        prepare children for a technology-led future. OMOTOOL kits are an add-on
        to inspire the hands-on learning approach by providing 150+ components
        and 100+ projects that can be created and applied to real-life
        problem-solving situations. Our team consists of educators who graduated
        from top universities and are passionate and specialised in their
        subjects. As we progress with our aim to make STEM education for all and
        encourage skill-based learning abiding a technology-driven future, We
        offer programs with rich content of 1200+ hours, train 22,000+ students
        monthly in 40+ schools and support NGO schools as part of community
        outreach. Our curriculum is mapped to national and international schools
        with a massive inventory of tools & equipment, content & resources. We
        are also one of the largest STEM educator providers. We have built trust
        in the minds and hearts of 1,00,000+ students and their parents. We
        continue to walk the extra mile with our 24hr one-on-one customer
        support and reach new heights through national and international
        competition participation.
      </span>
      <span className={classes.main_about_list}>
        <p>OMOTEC at Glance</p>
        <ul>
          <li>7+ centres with a global presence</li>
          <li>1,00,000+ students trained</li>
          <li>40+ schools</li>
          <li>22,000+ students monthly trained in schools</li>
          <li>1200+ hours of structured curriculum</li>
          <li>100+ Published Research Papers</li>
          <li>4 patents (1 granted and 3 filed)</li>
          <li>
            90+ National and International competition awards (First Tech
            Challenge (FTC), First Lego League (FLL), World Robotics Olympiad
            (WRO), Codeavour & Hackathons, BIEA, IRIS, Microsoft Imagine Cup,
            Google code to learn and many more)
          </li>
        </ul>
      </span>
    </div>
  );
};

export default About;
