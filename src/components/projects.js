import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import './css/Projects.css';

/**A component to represent the porjects section */
function Projects(props) {
    // Equivalent to react states
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

    /**Open the pop-up dialog */
    function handleGalleryOpen(){
        setOpen(true);
    }
    
    /**Close the pop-up dialog */
    function handleGalleryClose(){
        setOpen(false);
    }

    /**Information to put inside the galley. This function will also open
     * the pop-up dialog
     * @param name The name of the project
     */
    function populateGallery(name){
        // Open the gallery for viewing
        console.log("inside populate gallery");
        handleGalleryOpen();

        // Update data used in gallery
        setName(name);
    }

    let project1Image = require("../assets/fire-solid.svg");
    let project2Image = require('../assets/money-check-alt-solid.svg');
    let project3Image = require('../assets/microchip-solid.svg');

    let project1 = createProjectDisplay("DDSBlaze", "Web application to keep track of individuals during fire " + 
                                        "alarms and other emergencies",
                                        ["React.js", "Express.js", "Node.js", "Microsoft Graph", "Twilio API"], 
                                        "https://ddsblaze.herokuapp.com", project1Image, populateGallery);

    let project2 = createProjectDisplay("SpendingTracker", "A web-app to help track personal spending.", 
                                        ["Python/Flask", "React.js", "Google Firebase", "NoSQL","Gunicorn/Nginx"],
                                        "https://github.com/bill-ahmed/SpendingTracker", project2Image, populateGallery);

    let project3 = createProjectDisplay("Motion Pong", "A game of Pong that utilizes ultrasonic sensors for a " + 
                                        "deeper level of interaction with the user.", 
                                        ["Altera DE2-115", "Verilog HDL", "Ultrasonic Sensors"],
                                        "https://github.com/bill-ahmed/CSCB58-Final-Project", project3Image, populateGallery);
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
            <Dialog open={open} onClose={() => handleGalleryClose()}>
                <DialogTitle>{name}</DialogTitle>
                <Divider variant="fullWidth"/>
                <DialogContent>
                    <DialogContentText>
                    {getGalleryProps(name)}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
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
function createProjectDisplay(name, desc, techUsed, hypref, imgObj, galleryOpen){
    
    // Array of allowed AOS animations for this component
    let animationOptions = ["fade-up", "fade-left", "fade-right"];

    return(
        <Paper className="individualProject" data-aos={getRandomFadeAnimation(0, 
                                                        animationOptions.length, animationOptions)} data-aos-once="true">
            <img className="projectPhoto" src={imgObj} width="70px" height="70px"/>
            <div className="projectDetails">
                <h2>{name}</h2>
                <h3>{desc}</h3>
                <Button variant="outlined" className="seeMoreButton" 
                onClick={() => galleryOpen(name)}>
                    Gallery
                </Button>

                <Button variant="outlined" className="seeMoreButton" 
                href={hypref} target="_blank">
                    View More
                    <OpenInNewIcon style={{marginLeft : "5px"}}/>
                </Button>
            </div>
            <Divider variant="middle"/>
            <div>
                {techUsed.map((elem) => (
                    <Chip key={elem} className="techUsedChips" label={elem}/>
                ))}
            </div>
        </Paper>
    )
}

/**Given the name of a project, generate all images/videos that should
 * be included to show off the project
 * @param nameOfProject The name of the project
 * @returns A <div> containing all pictures/vidoes neatly formatted
 */
function getGalleryProps(nameOfProject){
    switch(nameOfProject){
        case "DDSBlaze":
            return (<h3>Coming soon!</h3>)
        case "SpendingTracker":
            return (<h3>Coming soon!</h3>)
        case "Motion Pong":
            return(
                <div class="videoEmbed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NO6y1-P6fCI" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                <h3>More coming soon!</h3>
                </div>
            )
    }
}

function getRandomFadeAnimation(min, max, animationOptions){
    // Index of element to return
    let index = Math.floor(Math.random() * (max - min)) + min;

    return animationOptions[index];
}

export default Projects;