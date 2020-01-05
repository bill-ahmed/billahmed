import { getProjectsGalleryData } from './GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AutoPlay from './AutoPlay';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import CodeIcon from '../assets/code_icon.svg'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Paper from '@material-ui/core/Paper';
import './css/Projects.css';
import SvgIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: "100%",
      height: "100%",
      maxWidth: '700px',
      maxHeight: '730px',
      alignSelf: 'center'
    },
    closeIcon: {
        position: "absolute",
        right: "5px",
        top: "10px",
    }
  }));

/* Define all the data for grid of images in "Gallery" view */
const allGalleryData = getProjectsGalleryData();
const ddsblazeGalleryData = allGalleryData[0];
const SpendingTrackerGalleryData = allGalleryData[1];
const motionPongGalleryData = allGalleryData[2];
const planitGalleryData = allGalleryData[3];

/**A component to represent the porjects section */
function Projects(props) {
    // Equivalent to react states
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const isMobileUser = props.isMobileUser();
    const maxNumGridListColumns = isMobileUser ? 4 : 6;
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

    let ddsblazeImage = require("../assets/fire-solid.svg");
    let spendingTrackerImage = require('../assets/money-check-alt-solid.svg');
    let planitImage = require('../assets/earth_globe_icon.svg');
    let motionPongImage = require('../assets/microchip-solid.svg');
    let mazeSolverImage = require('../assets/maze.svg');
    let jshellImage = require('../assets/gnu_bash.svg');

    let projectDDSBlaze = createProjectDisplay("DDSBlaze", "Web application to keep track of individuals during fire " + 
                                        "alarms and other emergencies",
                                        ["React.js", "Express.js", "Node.js", "Material-UI", "Microsoft Graph", "Twilio API"], 
                                        {"GitHub": "https://github.com/bill-ahmed/DDSBlaze-Deployment"}, ddsblazeImage, populateGallery, true);

    let projectSpendingTracker = createProjectDisplay("SpendingTracker", "A full-stack web application to help track personal spending with the aid of graphs and other " + 
                                        "statistical information.", 
                                        ["Python", "Flask", "React.js", "Redux", "Google Firebase","Gunicorn/Nginx"],
                                        {"GitHub" : "https://github.com/bill-ahmed/SpendingTracker"}, spendingTrackerImage, populateGallery);
    
    let projectPlanit = createProjectDisplay("Planit", "A mobile application (iOS & Android) that helps users build itineraries for locations/events in a given area.", 
                                        ["React Native", "Redux", "Google Firebase", "Yelp API", "Expo Framework"],
                                        {"Download" : "https://drive.google.com/file/d/1EKtXXa0-Ec_DMeO6nRvJvDm77xq_gBiL/view?usp=sharing"}, planitImage, populateGallery, true);

    let projectMotionPong = createProjectDisplay("Motion Pong", "A game of Pong that utilizes ultrasonic sensors for a " + 
                                        "deeper level of interaction with the user.", 
                                        ["Altera DE2-115", "Verilog HDL", "Ultrasonic Sensors"],
                                        {"GitHub" : "https://github.com/bill-ahmed/CSCB58-Final-Project"}, motionPongImage, populateGallery, true);

    let projectMazeSolver = createProjectDisplay("Maze Solver", "An implementation of Dijkstra's Algorithm that finds the " + 
                                        "shortest (and only) path to solving a maze.", 
                                        ["Python", "PIL", "Dijkstra"],
                                        {"GitHub" : "https://github.com/bill-ahmed/Maze-Solver"}, mazeSolverImage, populateGallery);

    let projectJShell = createProjectDisplay("JShell", "A Java implementation of the Unix shell, within a mock file system in the JVM.", 
                                        ["Java", "XML", "Agile/Scrum", "Subversion"],
                                        {}, jshellImage, populateGallery);

    return(
        <div id="projects" className="projects">
            <div className="projectsContainer">
                <div id="projectInnerContainer">
                    <div className="projectsOverview" data-aos="fade-up" data-aos-once="true">
                        <div id="projectsHeading" data-aos="fade-up" data-aos-once="true">
                            <h1>
                                Projects
                            </h1>

                            {/* <img src={require('../assets/code_icon.svg')} width="45"/> */}
                        </div>
                        <p>
                            Below are some projects i've worked on (or actively working on) during my free time.
                            In most cases, links to my GitHub are available if you want to see additional info.
                        </p>
                    </div>

                    {/* List all projects */}
                    <div className="projectsSubsection">
                        <div className="firstSubsection">
                            {projectPlanit}
                            {projectSpendingTracker} 
                            {projectMazeSolver}
                        </div>
                        
                        <div className="secondSubsection">
                            {projectDDSBlaze}
                            {projectMotionPong}
                            {projectJShell}
                        </div>
                    </div>
                </div>

                {/* Go to hobbies section button */}
                {/* <IconButton size="medium" color="inherit" id="linkToHobbiesSection" onClick={() => props.moveUserToSection("hobbies")} data-aos="fade-up" data-aos-once="true">
                    <ExpandMoreIcon fontSize="large"/>
                </IconButton> */}

            </div>
            <Dialog open={open} fullScreen={isMobileUser} maxWidth={"md"} fullWidth={true} onClose={() => handleGalleryClose()}>
                <DialogTitle>
                    {name + " — Gallery"}
                    <IconButton className={classes.closeIcon} onClick={() => handleGalleryClose()}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>

                <Divider variant="fullWidth"/>

                <DialogContent>
                    <DialogContentText>
                    {getGalleryProps(name, classes, maxNumGridListColumns)}
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
 * @param hyprefs ({str: str}) An object of elements that map from name to hyperlink
 * @param imgObj As of writing, <img> tags don't work unless you do <img src={require("pathToImage")}>.
 * Hence, imbObj is the return value of require() 
 * @param galleryOpen (function) Callback when gallery icon is clicked
 * @param (bool) Whether to show the Gallery button or not
 * @returns An element populated with the given data
*/
export function createProjectDisplay(name, desc, techUsed, hyprefs, imgObj, galleryOpen, showGalleryButton){
    
    // Array of allowed AOS animations for this component
    let animationOptions = ["fade-up", "fade-left", "fade-right"];

    return(
        <div id="individualProject" data-aos={getRandomFadeAnimation(0, 
                                                        animationOptions.length, animationOptions)} data-aos-once="true">
            <div className="projectDetails">
                <img alt={name + " Logo"} className="projectPhoto" src={imgObj} width="70px" height="70px"/>
                <h2>{name}</h2>

               { showGalleryButton && 
                <Button variant="outlined" className="seeMoreButton" 
                    onClick={() => galleryOpen(name)}>
                        Gallery
                </Button>
                }

                {/* All hyperlinks for current project */}
                {Object.entries(hyprefs).map(elem => {
                    return(
                    <Button variant="outlined" className="seeMoreButton" 
                    href={elem[1]} target="_blank" rel="noopener noreferrer">
                        {elem[0]}
                        <OpenInNewIcon style={{marginLeft : "5px"}}/>
                    </Button>
                    );
                })}
                
            </div>

            <div className="secondaryDetails">
                <h3>{desc}</h3>
                <Divider variant="middle"/>

                <div className="chipsContainer">
                {techUsed.map((elem) => (
                    <Chip key={elem} className="techUsedChips" label={elem}/>
                ))}
                </div>
            </div>
        </div>
    )
}

/**Given the name of a project, generate all images/videos that should
 * be included to show off the project
 * @param nameOfProject The name of the project.
 * @param classes Styles applied to each element
 * @param maxNumGridListColumns The maximum number of Grid List columns to use, if mobile user or not
 * @returns A <div> containing all pictures/vidoes neatly formatted
 */
function getGalleryProps(nameOfProject, classes, maxNumGridListColumns){

    switch(nameOfProject){
        case "DDSBlaze":
            return (
                <div className={classes.root}>
                    {/* Gallery of images for this project */}
                    <GridList cellHeight={maxNumGridListColumns === 4 ? 320 : 400} cols={maxNumGridListColumns} className={classes.gridList}>
                        {ddsblazeGalleryData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                {tile.type === "image" ? <img src={tile.img} alt={tile.title}/> : 
                                <video width="100%" height="100%" controls alt={tile.title}>
                                    <source src={tile.img} type="video/mp4"/>
                                </video>}
                                <GridListTileBar title={tile.title}/>
                            </GridListTile>
                        ))}
                    </GridList>
                    {/* <p>More coming soon!</p> */}
                </div>
            );
        case "SpendingTracker":
            return (
            "Coming soon!"
            );
        case "Motion Pong":
            return(
                <div className={classes.root}>
                    {/* Gallery of images for this project */}
                    <GridList cellHeight={maxNumGridListColumns === 4 ? 320 : 400} cols={3} className={classes.gridList}>
                            <GridListTile key="motionPongVideo" cols={3}>
                                <iframe width="100%" height="100%" title="Motion Pong Video" src="https://www.youtube.com/embed/NO6y1-P6fCI" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen/>
                            </GridListTile>

                        {motionPongGalleryData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                {tile.type === "image" ? 
                                <img src={tile.img} alt={tile.title} width="100%"/> 
                                : 
                                <video width="100%" height="100%" controls alt={tile.title}>
                                    <source src={tile.img} type="video/mp4"/>
                                </video>}
                                <GridListTileBar title={tile.title}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );
        case "Maze Solver":
            return ("Coming Soon!");
        case "JShell":
            return ("Coming Soon!");
        case "Planit":
            return(
            <div className={classes.root}>
                <h3>More coming soon!</h3>
                {/* Gallery of images for this project */}
                <GridList cellHeight={maxNumGridListColumns === 4 ? 320 : 400} cols={maxNumGridListColumns} className={classes.gridList}>
                    {planitGalleryData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            {tile.type === "image" ? 
                            <img src={tile.img} alt={tile.title} width="100%"/> 
                            : 
                            <video width="100%" height="100%" controls alt={tile.title}>
                                <source src={tile.img} type="video/mp4"/>
                            </video>}

                            <GridListTileBar title={tile.title}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>);
        default:
            return(
            "N/A"
            )
    }
}

function getRandomFadeAnimation(min, max, animationOptions){
    // Index of element to return
    let index = Math.floor(Math.random() * (max - min)) + min;

    return animationOptions[index];
}

export default Projects;
