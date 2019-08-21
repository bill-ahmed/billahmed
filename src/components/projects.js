import { getProjectsGalleryData } from './GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Paper from '@material-ui/core/Paper';
import './css/Projects.css';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

/* Define all the data for grid of images in "Gallery" view */
const allGalleryData = getProjectsGalleryData();
const ddsblazeGalleryData = allGalleryData[0];
const SpendingTrackerGalleryData = allGalleryData[1];
const motionPongGalleryData = allGalleryData[2];

/**A component to represent the porjects section */
function Projects(props) {
    // Equivalent to react states
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const classes = useStyles();

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
                <Paper elevation={1} className="projectsOverview">
                    <h2>Brief Overview</h2>
                    <p>
                        Below are some projects i've worked on (or am actively working on) during my free time. Although the list is small,
                        i'm always looking for ways to expand my skillset and explore new technologies.
                    </p>
                    <p>
                        I will continue to add more projects that are fun, interesting, and useful. Stay tuned!
                    </p>
                </Paper>

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
                    {getGalleryProps(name, classes)}
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
 * @param galleryOpen (bool) Determine if gallery is open or not
 * @returns An element populated with the given data
*/
function createProjectDisplay(name, desc, techUsed, hypref, imgObj, galleryOpen){
    
    // Array of allowed AOS animations for this component
    let animationOptions = ["fade-up", "fade-left", "fade-right"];

    return(
        <Paper elevation={3} className="individualProject" data-aos={getRandomFadeAnimation(0, 
                                                        animationOptions.length, animationOptions)} data-aos-once="true">
            <img alt={name + " Logo"} className="projectPhoto" src={imgObj} width="70px" height="70px"/>
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
function getGalleryProps(nameOfProject, classes){
    switch(nameOfProject){
        case "DDSBlaze":
            return (
                <div className={classes.root}>
                    {/* Gallery of images for this project */}
                    <GridList cellHeight={420} cols={2} className={classes.gridList}>
                        {ddsblazeGalleryData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                {tile.type === "image" ? <img src={tile.img} alt={tile.title}/> : 
                                <video width="100%" height="100%" controls alt={tile.title}>
                                    <source src={tile.img} type="video/mp4"/>
                                </video>}
                            </GridListTile>
                        ))}
                    </GridList>
                    <p>More coming soon!</p>
                </div>
            )
        case "SpendingTracker":
            return (
            "Coming soon!"
            )
        case "Motion Pong":
            return(
                <div className={classes.root}>
                    {/* Gallery of images for this project */}
                    <GridList cellHeight={270} cols={3} className={classes.gridList}>
                            <GridListTile key="motionPongVideo" cols={3}>
                                <iframe width="100%" height="100%" title="Motion Pong Video" src="https://www.youtube.com/embed/NO6y1-P6fCI" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen/>
                            </GridListTile>
                        {motionPongGalleryData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                {tile.type === "image" ? <img src={tile.img} alt={tile.title}/> : 
                                <video width="100%" height="100%" controls alt={tile.title}>
                                    <source src={tile.img} type="video/mp4"/>
                                </video>}
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            )
        default:
            return(
            <h3>N/A</h3>
            )
    }
}

function getRandomFadeAnimation(min, max, animationOptions){
    // Index of element to return
    let index = Math.floor(Math.random() * (max - min)) + min;

    return animationOptions[index];
}

export default Projects;