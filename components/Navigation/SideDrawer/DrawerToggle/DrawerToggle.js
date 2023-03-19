
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './DrawerToggle.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../Logo/Logo';
import Link from 'next/link';

const drawerToggle = (props) => (       
        <div className={classes.DrawerToggle} >
            <Link  href="/" exact="true">
                <Logo/>
            </Link>
            <span onClick={props.clicked}>
                <FontAwesomeIcon icon={faBars} aria-hidden="true"/>    
            </span>           
        </div>    
);

export default drawerToggle;