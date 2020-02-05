import { getProjectsGalleryData } from './ProjectsComponents/GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import IsMobileUser from '../api/UserInfo';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import './css/Projects.css';

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
    },
    expandIcon: {
        color: 'white',
        fontSize: "large",
        margin: "20px"
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
    const [seeMore, setSeeMore] = React.useState(false);    // Controll how many projects are rendered on screen
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

    /**Open or collapse the "see more" button for viewing all/some projects * */
    function toggleProjectsView(){
        if(seeMore){
            // Collapse all the projects
            setSeeMore(false);
            document.getElementById("individualProject").scrollIntoView();
            
        } else {
            setSeeMore(true);
        }
    }

    let ddsblazeImage = require("../assets/fire-solid.svg");
    let spendingTrackerImage = require('../assets/money-check-alt-solid.svg');
    let planitImage = require('../assets/earth_globe_icon.svg');
    let motionPongImage = require('../assets/microchip-solid.svg');
    let mazeSolverImage = require('../assets/maze.svg');
    let mandoBotImage = require('../assets/gnu_bash.svg');

    let projectDDSBlaze = createProjectDisplay("DDSBlaze", "Web application to keep track of individuals during fire " + 
                                        "alarms and other emergencies",
                                        ["React.js", "Express.js", "Node.js", "Microsoft Graph", "Twilio API"], 
                                        {"GitHub": "https://github.com/bill-ahmed/DDSBlaze-Deployment"}, ddsblazeImage, populateGallery, true);

    let projectSpendingTracker = createProjectDisplay("SpendingTracker", "A full-stack web application to help track personal spending with the aid of graphs and other " + 
                                        "statistical information.", 
                                        ["Python Flask", "React.js", "Redux", "Firebase"],
                                        {"GitHub" : "https://github.com/bill-ahmed/SpendingTracker"}, spendingTrackerImage, populateGallery, true);
    
    let projectPlanit = createProjectDisplay("Planit", "Android & iOS application that helps users build itineraries for locations/events in a given area.", 
                                        ["React Native", "Node.js", "Redux", "Firebase", "Yelp API"],
                                        {"Install" : "https://drive.google.com/file/d/1EKtXXa0-Ec_DMeO6nRvJvDm77xq_gBiL/view?usp=sharing"}, planitImage, populateGallery, true);

    let projectMotionPong = createProjectDisplay("Motion Pong", "A game of Pong that utilizes ultrasonic sensors for a " + 
                                        "deeper level of interaction with the user.", 
                                        ["Altera DE2-115", "Verilog HDL", "Ultrasonic Sensors"],
                                        {"GitHub" : "https://github.com/bill-ahmed/CSCB58-Final-Project"}, motionPongImage, populateGallery, true);

    let projectMazeSolver = createProjectDisplay("Maze Solver", "An implementation of Dijkstra's Algorithm that finds the " + 
                                        "shortest (and only) path to solving a maze.", 
                                        ["Python", "PIL", "Dijkstra"],
                                        {"GitHub" : "https://github.com/bill-ahmed/Maze-Solver"}, mazeSolverImage, populateGallery);

    let projectMandoBot = createProjectDisplay("Mando Bot", "A template/boilerplate for creating a Slack bot. " + 
                                                "This template can be used to rapidly deploy & build functionality for a bot.", 
                                        ["Node.js", "Express.js", "Slack Bot"],
                                        {"GitHub": "https://github.com/bill-ahmed/mando_bot"}, mandoBotImage, populateGallery);

    return(
        <div id="projects" className="projects">
            <div className="projectsContainer">
                <div id="projectInnerContainer">
                    <div className="projectsOverview" data-aos="fade-up" data-aos-once="true">
                        <div id="projectsHeading" data-aos="fade-up" data-aos-once="true">
                            <h1>
                                Projects
                            </h1>
                        </div>
                        <p id="projectInfoText">
                            Below are some projects i've worked on (or actively working on) during my free time.
                            In most cases, links to my GitHub are available if you want to see additional info.
                        </p>
                    </div>

                    {/* List all projects */}
                    <div className="projectsSubsection">
                        <div className="projectsRow">
                            {projectPlanit}
                            {projectDDSBlaze}
                        </div>
                        
                        {seeMore && 
                        
                        <div className="projectsRow">
                            {projectMandoBot} 
                            {projectSpendingTracker}
                        </div>
                        }
                        
                        {seeMore && 
                        
                        <div className="projectsRow">
                            {projectMotionPong}
                            {projectMazeSolver}
                        </div>
                        }
                        
                    </div>
                </div>

                {/* Show More or Less Icon */}
                <IconButton id="ExpandAndCollapseProjects" className={classes.expandIcon} 
                    size="medium" onClick={toggleProjectsView}>

                    {seeMore ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </IconButton>

            </div>
            <Dialog open={open} fullScreen={isMobileUser} maxWidth={"md"} fullWidth={true} onClose={() => handleGalleryClose()}>
                <DialogTitle>
                    {name + " — Gallery"}
                    <IconButton className={classes.closeIcon} onClick={() => handleGalleryClose()}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>

                <Divider light variant="fullWidth"/>

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
    let btnSize = IsMobileUser() ? "small" : "medium";

    return(
        <div id="individualProject" data-aos={getRandomFadeAnimation(0, 
                                                        animationOptions.length, animationOptions)} data-aos-once="true">
            <div className="projectDetails">
                <img alt={name + " Logo"} className="projectPhoto" src={imgObj} width="70px" height="70px"/>
                <h2>{name}</h2>

               { showGalleryButton && 
                <Button size={btnSize} variant="outlined" className="seeMoreButton" 
                    onClick={() => galleryOpen(name)}>
                        Gallery
                </Button>
                }

                {/* All hyperlinks for current project */}
                {Object.entries(hyprefs).map(elem => {
                    return(
                    <Button size={btnSize} variant="outlined" className="seeMoreButton" 
                    href={elem[1]} target="_blank" rel="noopener noreferrer">
                        {elem[0]}
                        <OpenInNewIcon fontSize={btnSize} style={{marginLeft : "5px"}}/>
                    </Button>
                    );
                })}
                
            </div>

            <div className="secondaryDetails">
                <h3 className="projectDescription">{desc}</h3>
                <hr width="90%"/>

                <div className="chipsContainer">
                {techUsed.map((elem) => (
                    <Chip size={btnSize} clickable style={{color: 'white', borderColor: 'white'}} key={elem} variant='outlined' className="techUsedChips" label={elem}/>
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
        case "Mando Bot":
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
