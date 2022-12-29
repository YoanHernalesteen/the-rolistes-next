import { Fragment, useState } from 'react';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';


const Layout = props => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

    return (
        <Fragment id="top">
            <Toolbar drawerToggleClicked = {sideDrawerToggleHandler}/>
            <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler}/>

            <main>                
                {props.children}           
            </main>  
        </Fragment>
    )
}


export default Layout;
