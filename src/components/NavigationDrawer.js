import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

/** List Objects **/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/** ICONS **/
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import './css/NavigationDrawer.css';

/**Handle main functions of navigation drawer (opening, closing, event listenint, etc.) */
function NavigationDrawer(){
    const [state, setState] = React.useState({
        navDrawerOpen: false,
    });

    /**Function to toggle opening and closing the side-nav */
    const toggleDrawer = (open) => {
        setState({...state, navDrawerOpen : open});
    }

    // Retrieve props to render inside the side navigation
    let navProps = sideNavProps();

    return(
        <div>
            <IconButton color="inherit" onClick={() => toggleDrawer(true)} aria-label="open navigation drawer">
                <MenuIcon/>
            </IconButton>

            <Drawer anchor="left" open={state.navDrawerOpen} onClose={() => toggleDrawer(false)}>
                {navProps}
            </Drawer>
        </div>
    )
}

/**Return the props to be rendered in the side navigation
 * @returns Props to be rendered.
 */
function sideNavProps(){
    return(
        <div className="sideNavigation">
            <List>
                {/* Home Button */}
                <ListItem button key="Home">
                    <ListItemIcon className="sideNavListItemIcon">
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>

                {/* Projects Button */}
                <ListItem button key="Projects">
                    <ListItemIcon>
                        <img src={require('../assets/laptop-code-solid.svg')} width="25px" height="25px" color="inherit"/>
                    </ListItemIcon>
                    <ListItemText primary="Projects" secondary="Stuff i'm excited about."/>
                </ListItem>

                {/* Hobbies Button */}
                <ListItem button key="Hobbies">
                    <ListItemIcon>
                        <CameraAltIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Hobbies" secondary="When I have too much free time."/>
                </ListItem>
            </List>
        </div>
    )
}

export default NavigationDrawer;