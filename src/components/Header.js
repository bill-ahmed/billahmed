import React from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import NavigationDrawer from './NavigationDrawer';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Header.css';

function handleButtonClick(location){
    switch(location){
        case "home":
            window.location.replace("/");
            break;
        case "projects":
            console.log("set location to projects");
            document.querySelector('#projects').scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case "hobbies":
            // Scroll to a certain element
            document.querySelector('#hobbies').scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;

        case "top":
            // Sroll back to the top of the page
            document.querySelector("html").scrollIntoView(true);
        default:
            break;
    }
    
}

function Header(){
    // If user is in mobile view, give the nav buttons a border
    var isMobileUser = global.isMobileUser;
    let navButtonVariant = "text";
    if(isMobileUser){
        console.log("is mobile user, changing button styles");
        navButtonVariant = "outlined";
    }

    return(
        <div id="headerContent" className="headerContent">
            <div className="navigation">
                {/* <div className="leftNavigation">
                    {isMobileUser && <NavigationDrawer handleButtonClick={handleButtonClick}/>}
                </div> */}

                <div className="rightNavigation">
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("home")}>Home</Button>
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("projects")}>Projects</Button>
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("hobbies")}>Hobbies</Button>
                </div>
            </div>

            <div className="shortIntro">
                <h1>Bilal Ahmed</h1>
                <h3><i>A Computer Science student at the University of Toronto</i></h3>
            </div>
            <br/>
            <br/>
            <div className="socialLinks">

                {/* GitHub logo */}
                <Tooltip title="GitHub">
                    <Fab size="large" className="socialLink" href="https://github.com/bill-ahmed" target="_blank">
                        <img alt="Link to GitHub" src={require("../assets/github-brands.svg")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>
                
                {/* LinkedIn logo */}
                <Tooltip title="LinkedIn">
                    <Fab size="large" className="socialLink" href="https://www.linkedin.com/in/bill-ahmed/" target="_blank">
                        <img alt="Link to LinkedIn" className="roundedImage" src={require("../assets/linkedin-in-brands.svg")} width="60%" height="60%"/>
                    </Fab>
                </Tooltip>

                {/* Facebook logo */}
                <Tooltip title="Facebook">
                    <Fab size="large" className="socialLink" href="https://www.facebook.com/BillAhmed4343" target="_blank">
                        <img alt="Link to Facebook" className="roundedImage" src={require("../assets/facebook-brands.svg")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>

            </div>
            <IconButton size="medium" color="inherit" id="linkToProjectSection" onClick={() => handleButtonClick("projects")}>
                <ExpandMoreIcon fontSize="large"/>
            </IconButton>
            <br/>
            <br/>
            
        </div>
    );
}

export default Header;