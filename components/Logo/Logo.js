import classes from "./Logo.module.css";

const imgLogo = "/images/Logo_Nav_Side.jpg";

const logo = (props) => (
  <div className={classes.LogoSection}>
    <img src={imgLogo} alt="Logo" className={classes.LogoImg} />
  </div>
);

export default logo;
