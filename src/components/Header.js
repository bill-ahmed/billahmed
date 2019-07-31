import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Header.css';

function handleHomeButtonClick(location){
    switch(location){
        case "home":
            window.location.replace("/");
            break;
        case "projects":
            window.location.replace("/projects");
            break;
        default:
            break;
    }
    
}

function Header(props) {
    return(
        <div className="headerContent">
            <div className="navigation">
                <Button className="navButton" size="large" variant="text" color="inherit" onClick={() => handleHomeButtonClick("home")}>Home</Button>
                <Button className="navButton" size="large" variant="text" color="inherit" onClick={() => handleHomeButtonClick("projects")}>Projects</Button>
            </div>
            
            <div className="shortIntro">
                <h1>Bilal Ahmed</h1>
                <h3><i>A second-year Computer Science student at the University of Toronto</i></h3>
            </div>
            <br/>
            <br/>
            <div className="socialLinks">

                {/* GitHub logo */}
                <Tooltip title="GitHub">
                    <Fab size="large" className="socialLink" href="https://github.com/bill-ahmed" target="_blank">
                        <img src={require("../assets/GitHub-Mark-120px-plus.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>
                
                {/* LinkedIn logo */}
                <Tooltip title="LinkedIn">
                    <Fab size="large" className="socialLink" href="https://www.linkedin.com/in/bill-ahmed/" target="_blank">
                        <img className="roundedImage" src={require("../assets/linkedin-logo.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>

                {/* Facebook logo */}
                <Tooltip title="Facebook">
                    <Fab size="large" className="socialLink" href="https://www.facebook.com/BillAhmed4343" target="_blank">
                        <img className="roundedImage" src={require("../assets/facebook-logo.png")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>

            </div>
            <br/>
            <br/>
            
        </div>
    );
}

export default Header;