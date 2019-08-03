import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import './css/Projects.css';

/**A component to represent the porjects section */
function Projects(props) {
    let project1Image = require("../assets/fire-solid.svg");
    let project2Image = require('../assets/money-check-alt-solid.svg');
    let project3Image = require('../assets/microchip-solid.svg');

    let project1 = createProjectDisplay("DDSBlaze", "Web application to keep track of individuals during fire " + 
                                        "alarms and and other emergencies",
                                        ["React.js", "Express.js", "Node", "Microsoft Graph"], 
                                        "https://ddsblaze.herokuapp.com", project1Image);

    let project2 = createProjectDisplay("SpendingTracker", "A web-app to help track personal spending.", 
                                        ["Python/Flask", "React", "Google Firebase", "NoSQL","Gunicorn/Nginx"],
                                        "https://github.com/bill-ahmed/SpendingTracker", project2Image);

    let project3 = createProjectDisplay("Motion Pong", "A game of Pong that utilizes ultrasonic sensors for a " + 
                                        "deeper level of interaction with the user.", 
                                        ["Altera DE2-115", "Verilog HDL", "Ultrasonic Sensors"],
                                        "https://github.com/bill-ahmed/CSCB58-Final-Project", project3Image);
    return(
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <Divider variant="middle"/>
            <div className="projectsContainer">
                <div className="projectsSubsection">
                    {project1}
                    {project2}
                    {project3}
                </div>
            </div>

        </div>
    );
}

/**Create a generic project display with the given data 
 * @param name Name of the project to display
 * @param desc Brief description of the project
 * @param techUsed String[] of various tools/technologies used
 * @param hypref An external link where a user can find more information
 * @param imgObj As of writing, <img> tags don't work unless you do <img src={require("pathToImage")}>.
 * Hence, imbObj is the return value of require() 
 * @returns An element populated with the given data
*/
function createProjectDisplay(name, desc, techUsed, hypref, imgObj){
    return(
        <Paper className="individualProject">
            <img className="projectPhoto" src={imgObj} width="70px" height="70px"/>
            <div className="projectDetails">
                <h2>{name}</h2>
                <h3>{desc}</h3>
                <Button variant="outlined" className="seeMoreButton" 
                href={hypref} target="_blank">
                    View More
                </Button>
            </div>
            <Divider variant="middle"/>
            <div>
                {techUsed.map((elem) => (
                    <Chip className="techUsedChips" label={elem}/>
                ))}
            </div>
        </Paper>
    )
}

export default Projects;