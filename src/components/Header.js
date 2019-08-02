import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
// import NET from './js_animation/vanta.net.min.js';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Header.css';

global.THREE = require('three');

class Header extends Component{
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount(){
        
    }

    handleButtonClick(location){
        switch(location){
            case "home":
                window.location.replace("/");
                break;
            case "projects":
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
            default:
                break;
        }
        
    }
    
    render(){
        return(
            <div id="headerContent" className="headerContent">
                <div className="navigation">
                    <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => this.handleButtonClick("home")}>Home</Button>
                    <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => this.handleButtonClick("projects")}>Projects</Button>
                    <Button className="navButton" size="medium" variant="text" color="inherit" onClick={() => this.handleButtonClick("hobbies")}>Hobbies</Button>
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
                <IconButton size="medium" color="inherit" id="linkToProjectSection" onClick={() => this.handleButtonClick("projects")}>
                    <ExpandMoreIcon/>
                </IconButton>
                <br/>
                <br/>
                
            </div>
        );
    }
}

export default Header;