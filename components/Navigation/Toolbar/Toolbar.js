
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Search from '../Search/Search';
import { Container } from 'react-bootstrap';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Container>            

            <nav>                                        
                <div className={classes.DesktopOnly}>
                    <NavigationItems/>
                </div>
            </nav>

            <DrawerToggle clicked = {props.drawerToggleClicked}/>

            <div>
                <Search/>
            </div>

        </Container>
    </header>
);

export default toolbar;