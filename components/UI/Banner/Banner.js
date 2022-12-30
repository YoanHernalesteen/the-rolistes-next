import { Fragment } from "react";
import classes from "./Banner.module.css";

const bannerImg = "/images/rollinKunzArt/Banner.jpg";

const Banner = (props) => (
  <Fragment>
    <img src={bannerImg} alt="banner" className={classes.banner} />
  </Fragment>
);

export default Banner;
