import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CodeIcon from '@material-ui/icons/Code';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { getProjectsGalleryData } from './ProjectsComponents/GalleryData';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import './css/Header.css';

const useStyles = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    },
    list: {
        width: 250,
    },
  });

const RESUME = require('../assets/Bilal_Ahmed_Resume.pdf');

/**Render first page user sees */
function Header(props){
    // Control side-navigation drawer
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    // If user is in mobile view, give the nav buttons a border
    var isMobileUser = global.isMobileUser;
    let navButtonVariant = "text";
    if(isMobileUser){
        navButtonVariant = "outlined";
    }

    const handleButtonClick = props.moveUserToSection;  // Navigation to other sections

    // All the links in header, such as GitHub, LinkedIn, etc.
    let headerLinks = [
        {
            name: "GitHub", // name to give button in desktop view
            href: "https://github.com/bill-ahmed",  // hyperlink
            svgPath: 
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 
                    1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 
                    2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 
                    205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 
                    1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 
                    23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 
                    5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 
                    17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 
                    1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 
                    35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 
                    4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/bill-ahmed/",
            svgPath: 
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 
                    107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 
                    76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>,
        },
        { 
            name: "My Resume",
            href: RESUME,
            svgPath: <GetAppIcon/>,
        }
    ];

    const itemsToDisplay = [
        {
            name: "Home", 
            callback: () => {handleButtonClick("home"); setDrawerOpen(false)},
            icon: <HomeIcon/>
        },
        {
            name: "Projects",
            callback: () => {handleButtonClick("projects"); setDrawerOpen(false)},
            icon: <CodeIcon/>
        },
        {
            name: "Work & Education",
            callback: () => {handleButtonClick("workExperience"); setDrawerOpen(false)},
            icon: <WorkIcon/>
        }
    ];

    return(
        <div id="headerContent" className="headerContent">
            <div id="topNavigation" className="navigation">
                <div className="leftNavigation">
                    <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="open navigation">
                        <MenuIcon/>
                    </IconButton>
                </div>
                <ButtonGroup size="medium" color="inherit" className="rightNavigation">
                    {itemsToDisplay.map((button, index) => {
                        return(
                            <Button className="navButton" 
                                    size="large" 
                                    variant={navButtonVariant} 
                                    color="inherit" 
                                    onClick={() => button.callback()}>
                                {button.name}
                            </Button>
                        );
                    })}
                </ButtonGroup>
            </div>
            
            <div className="headerBodyContainer">
                <div className="shortIntro">

                    {/* My full name */}
                    <svg id="fullName" width="755" height="120" viewBox="0 0 755 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.88281 113V10.625H39.3516C50.4609 10.625 58.8047 12.9219 64.3828 17.5156C70.0078 22.1094 72.8203 28.9062 72.8203 37.9062C72.8203 42.6875 71.4609 46.9297 68.7422 50.6328C66.0234 54.2891 62.3203 57.125 57.6328 59.1406C63.1641 60.6875 67.5234 63.6406 70.7109 68C73.9453 72.3125 75.5625 77.4688 75.5625 83.4688C75.5625 92.6562 72.5859 99.875 66.6328 105.125C60.6797 110.375 52.2656 113 41.3906 113H5.88281ZM19.3828 65.1172V101.961H41.6719C47.9531 101.961 52.8984 100.344 56.5078 97.1094C60.1641 93.8281 61.9922 89.3281 61.9922 83.6094C61.9922 71.2812 55.2891 65.1172 41.8828 65.1172H19.3828ZM19.3828 54.2891H39.7734C45.6797 54.2891 50.3906 52.8125 53.9062 49.8594C57.4688 46.9062 59.25 42.8984 59.25 37.8359C59.25 32.2109 57.6094 28.1328 54.3281 25.6016C51.0469 23.0234 46.0547 21.7344 39.3516 21.7344H19.3828V54.2891Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M107.695 113H94.6875V36.9219H107.695V113ZM93.6328 16.7422C93.6328 14.6328 94.2656 12.8516 95.5312 11.3984C96.8438 9.94531 98.7656 9.21875 101.297 9.21875C103.828 9.21875 105.75 9.94531 107.062 11.3984C108.375 12.8516 109.031 14.6328 109.031 16.7422C109.031 18.8516 108.375 20.6094 107.062 22.0156C105.75 23.4219 103.828 24.125 101.297 24.125C98.7656 24.125 96.8438 23.4219 95.5312 22.0156C94.2656 20.6094 93.6328 18.8516 93.6328 16.7422Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M142.711 113H129.703V5H142.711V113Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M210.562 113C209.812 111.5 209.203 108.828 208.734 104.984C202.688 111.266 195.469 114.406 187.078 114.406C179.578 114.406 173.414 112.297 168.586 108.078C163.805 103.812 161.414 98.4219 161.414 91.9062C161.414 83.9844 164.414 77.8438 170.414 73.4844C176.461 69.0781 184.945 66.875 195.867 66.875H208.523V60.8984C208.523 56.3516 207.164 52.7422 204.445 50.0703C201.727 47.3516 197.719 45.9922 192.422 45.9922C187.781 45.9922 183.891 47.1641 180.75 49.5078C177.609 51.8516 176.039 54.6875 176.039 58.0156H162.961C162.961 54.2188 164.297 50.5625 166.969 47.0469C169.688 43.4844 173.344 40.6719 177.938 38.6094C182.578 36.5469 187.664 35.5156 193.195 35.5156C201.961 35.5156 208.828 37.7188 213.797 42.125C218.766 46.4844 221.344 52.5078 221.531 60.1953V95.2109C221.531 102.195 222.422 107.75 224.203 111.875V113H210.562ZM188.977 103.086C193.055 103.086 196.922 102.031 200.578 99.9219C204.234 97.8125 206.883 95.0703 208.523 91.6953V76.0859H198.328C182.391 76.0859 174.422 80.75 174.422 90.0781C174.422 94.1562 175.781 97.3438 178.5 99.6406C181.219 101.938 184.711 103.086 188.977 103.086Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M256.055 113H243.047V5H256.055V113Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M371.227 86.2812H328.336L318.703 113H304.781L343.875 10.625H355.688L394.852 113H381L371.227 86.2812ZM332.414 75.1719H367.219L349.781 27.2891L332.414 75.1719Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M419.602 46.1328C425.367 39.0547 432.867 35.5156 442.102 35.5156C458.18 35.5156 466.289 44.5859 466.43 62.7266V113H453.422V62.6562C453.375 57.1719 452.109 53.1172 449.625 50.4922C447.188 47.8672 443.367 46.5547 438.164 46.5547C433.945 46.5547 430.242 47.6797 427.055 49.9297C423.867 52.1797 421.383 55.1328 419.602 58.7891V113H406.594V5H419.602V46.1328Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M498.141 36.9219L498.492 45.3594C504.07 38.7969 511.594 35.5156 521.062 35.5156C531.703 35.5156 538.945 39.5938 542.789 47.75C545.32 44.0938 548.602 41.1406 552.633 38.8906C556.711 36.6406 561.516 35.5156 567.047 35.5156C583.734 35.5156 592.219 44.3516 592.5 62.0234V113H579.492V62.7969C579.492 57.3594 578.25 53.3047 575.766 50.6328C573.281 47.9141 569.109 46.5547 563.25 46.5547C558.422 46.5547 554.414 48.0078 551.227 50.9141C548.039 53.7734 546.188 57.6406 545.672 62.5156V113H532.594V63.1484C532.594 52.0859 527.18 46.5547 516.352 46.5547C507.82 46.5547 501.984 50.1875 498.844 57.4531V113H485.836V36.9219H498.141Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M643.758 114.406C633.445 114.406 625.055 111.031 618.586 104.281C612.117 97.4844 608.883 88.4141 608.883 77.0703V74.6797C608.883 67.1328 610.312 60.4062 613.172 54.5C616.078 48.5469 620.109 43.9062 625.266 40.5781C630.469 37.2031 636.094 35.5156 642.141 35.5156C652.031 35.5156 659.719 38.7734 665.203 45.2891C670.688 51.8047 673.43 61.1328 673.43 73.2734V78.6875H621.891C622.078 86.1875 624.258 92.2578 628.43 96.8984C632.648 101.492 637.992 103.789 644.461 103.789C649.055 103.789 652.945 102.852 656.133 100.977C659.32 99.1016 662.109 96.6172 664.5 93.5234L672.445 99.7109C666.07 109.508 656.508 114.406 643.758 114.406ZM642.141 46.2031C636.891 46.2031 632.484 48.125 628.922 51.9688C625.359 55.7656 623.156 61.1094 622.312 68H660.422V67.0156C660.047 60.4062 658.266 55.2969 655.078 51.6875C651.891 48.0312 647.578 46.2031 642.141 46.2031Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                        <path d="M685.383 74.3281C685.383 62.6562 688.148 53.2812 693.68 46.2031C699.211 39.0781 706.453 35.5156 715.406 35.5156C724.312 35.5156 731.367 38.5625 736.57 44.6562V5H749.578V113H737.625L736.992 104.844C731.789 111.219 724.547 114.406 715.266 114.406C706.453 114.406 699.258 110.797 693.68 103.578C688.148 96.3594 685.383 86.9375 685.383 75.3125V74.3281ZM698.391 75.8047C698.391 84.4297 700.172 91.1797 703.734 96.0547C707.297 100.93 712.219 103.367 718.5 103.367C726.75 103.367 732.773 99.6641 736.57 92.2578V57.3125C732.68 50.1406 726.703 46.5547 718.641 46.5547C712.266 46.5547 707.297 49.0156 703.734 53.9375C700.172 58.8594 698.391 66.1484 698.391 75.8047Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1)"/>
                    </svg>


                    <h3>
                        A <b>Computer Science</b> student at the <b>University of Toronto</b> that's passionate
                        about <b>web design</b> and <b>software development</b>.
                    </h3>

                    <div className="socialLinks">
                        {headerLinks.map((elem, index) => {
                            return(
                                <Button key={index} variant="outlined" size="large" className="socialLink" href={elem.href} target="_blank" 
                                endIcon={elem.svgPath && 
                                    <SvgIcon viewBox="0 0 500 500">
                                        {elem.svgPath}
                                    </SvgIcon>
                                }>
                                    {elem.name}
                                
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            {/* Left navigation drawer for small displays */}
            <Drawer disableRestoreFocus anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {getDrawerNavigationItems(classes, itemsToDisplay)}
            </Drawer>
        </div>
    );
}

/**Return props for left navigation, when on a small display
 * @param classes The styling to apply
 * @param itemsToDisplay Array of items to display, along with name and callbacks
 */
function getDrawerNavigationItems(classes, itemsToDisplay){

    return(
        <div className={classes.list}>
            <List>
                <ListItem>
                    <ListItemText primary="Navigation" secondary="Tap outside to close"/>
                </ListItem>
            </List>

            <Divider/>
            <List>
                {itemsToDisplay.map((item, index) => {
                    return(
                        <ListItem button onClick={() => item.callback()}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText primary={item.name}/>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}

export default Header;