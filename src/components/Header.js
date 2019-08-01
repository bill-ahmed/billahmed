import React from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Header.css';

function handleButtonClick(location){
    switch(location){
        case "home":
            window.location.replace("/");
            break;
        case "projects":
            document.getElementById("projects").scrollIntoView();
            break;
        case "hobbies":
            document.getElementById("hobbies").scrollIntoView();
            break;
        default:
            break;
    }
    
}

function Header(props) {
    return(
        <div className="headerContent">
            <div className="navigation">
                <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => handleButtonClick("home")}>Home</Button>
                <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => handleButtonClick("projects")}>Projects</Button>
                <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => handleButtonClick("hobbies")}>Hobbies</Button>
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
                        <img alt="Link to GitHub" src={require("../assets/GitHub-Mark-120px-plus.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>
                
                {/* LinkedIn logo */}
                <Tooltip title="LinkedIn">
                    <Fab size="large" className="socialLink" href="https://www.linkedin.com/in/bill-ahmed/" target="_blank">
                        <img alt="Link to LinkedIn" className="roundedImage" src={require("../assets/linkedin-logo.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>

                {/* Facebook logo */}
                <Tooltip title="Facebook">
                    <Fab size="large" className="socialLink" href="https://www.facebook.com/BillAhmed4343" target="_blank">
                        <img alt="Link to Facebook" className="roundedImage" src={require("../assets/facebook-logo.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>

            </div>
            <IconButton size="large" color="inherit" id="linkToProjectSection" onClick={() => handleButtonClick("projects")}>
                <ExpandMoreIcon/>
            </IconButton>
            <br/>
            <br/>
            
        </div>
    );
}

export default Header;