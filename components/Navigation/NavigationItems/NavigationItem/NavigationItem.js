import classes from "./NavigationItem.module.css";
import Link from "next/link";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Link
      href={props.link} //exact activeClassName={classes.active}
    >
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
