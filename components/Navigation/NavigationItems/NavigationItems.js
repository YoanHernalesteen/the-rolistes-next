import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Logo from "../../Logo/Logo";
// import patreonButton from '../../../public/images/become_a_patron_button_BnW - Black.png';
import Link from "next/link";

const patreonButton = "/images/become_a_patron_button_BnW - Black.png";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <Link href="/" exact="true">
      <Logo />
    </Link>

    <span className={classes.SpacingNav} />
    <NavigationItem link="/news">News</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/podcast">Podcasts</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/paris_gondo">Paris Gondo</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/about_us">About Us</NavigationItem>

    <a
      href="https://www.patreon.com/RolistesPod"
      className={classes.supportLink}
    >
      <img src={patreonButton} alt="Support me on Patreon" aria-hidden="true" />
    </a>
  </ul>
);

export default navigationItems;
