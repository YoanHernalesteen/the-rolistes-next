
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './DrawerToggle.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../../../assets/images/Logo_Nav_Side.jpg';
import Logo from '../../../Logo/Logo';

const drawerToggle = (props) => (       
        <div className={classes.DrawerToggle} >
            <NavLink  to="/" exact>
                <Logo/>
            </NavLink>
            <span onClick={props.clicked}>
                <FontAwesomeIcon icon={faBars} aria-hidden="true"/>    
            </span>           
        </div>    
);

export default drawerToggle;