import React, { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import { getPortfolioGalleryData } from '../GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import './Photography.css';

// All the images used
const portfolioData = getPortfolioGalleryData();
const AutoPlayPhotos = autoPlay(SwipeableViews);

// Styles for GridList and all child elements
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    imgHeader: {

    },
    img: {
        width: "100%",
        maxWidth: "700px",
        overflow: "hidden",
    }
  }));

  const mobileStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: "100%",
      height: "100%",
      flexWrap: "nowrap",
      transform: 'translateZ(0)',
    },
  }));
  
function Photography(props){
    // Keep track of which image is selected, so appropriate one can be displayed larger
    const [currImage, setCurrImage] = useState();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = portfolioData.length;

    var classes = useStyles();  // Styles added to GridList and other elements

    /**Hadle user clicking on an image
     * @param imageClicked The image the use has clicked, given by require('path/to/file.jpg')
     */
    const handleImageClick = (imgID, imageClicked) => {
        //animateImageClick(imgID, imageClicked);
        setCurrImage(imageClicked);
    }

    /**Handle showing next image in slide show */
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    /**Handle showing previous image in slide show */
    const handlePrevious = () => {
        setActiveStep(activeStep - 1);
    }

    /**Set the current step in slide show
     * @param step (int) The step number to set.
     */
    const handleStepChange = (step) => {
        setActiveStep(step);
    }

    return(
        <div className="imageViewerContainer" data-aos="fade-up" data-aos-once="true">
            <div className="photographySummary">
                <p>
                    In my free time, I especially enjoy photography. Most of my subjects are relatively still,
                    although I do ocassionally attempt to photograph moving objects. The following is a small sample
                    of the images i've taken.
                </p>
            </div>

            {/* Show the image slide show */}
            <div className={classes.root} id="largeImageViewer">

                {/* Heading for each image */}
                <Paper className={classes.imgHeader} elevation={0}>
                    <h3><i>{portfolioData[activeStep].title}</i></h3>
                </Paper>

                {/* Control auto-play of images */}
                <AutoPlayPhotos axis="x" index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                    {portfolioData.map((pic) => (
                        <div key={pic.title}>
                            <img className={classes.img} src={pic.img} alt={pic.title}/>
                        </div>
                    ))}
                </AutoPlayPhotos>

                {/* Controls buttons for the slide show */}
                <MobileStepper steps={maxSteps} position="static" variant="text" activeStep={activeStep} 
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        <KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handlePrevious} disabled={activeStep === 0}>
                        <KeyboardArrowLeft/>
                        Back
                    </Button>
                }/>

                {currImage && <img width="99%" height="99%" src={currImage} alt=""/>}
            </div>
        </div>
    );
}


/**Animate an image into a parent element
 * @param imageID The unique id of the DOM element
 * @param imageClicked Value of the image that was clicked, given by "require(path/to/file/jpg)" 
 */
function animateImageClick(imageID, imageClicked){
    // The image that was clicked in the gallery
    let imgClicked = document.getElementById(imageID);
    let imgClickedOrigin = imgClicked.getBoundingClientRect()

    // The image that will be displayed
    let imgToDisplay = document.createElement("img");

    // Calculate it's original dimensions
    let originalWidth = imgClickedOrigin.right - imgClickedOrigin.x;
    let originalHeight = imgClickedOrigin.bottom - imgClickedOrigin.y;

    // Parent of where this image is going to be placed
    let imgParent = document.getElementById("imageViewerContainer");
    let imgParentOrigin = imgParent.getBoundingClientRect();

    imgToDisplay.setAttribute("src", imageClicked);
    imgToDisplay.setAttribute("width", "99%");
    imgToDisplay.setAttribute("height", "99%");

    // [from {}, to {}]
    let fadeInAnimation = [{
        opacity: 0.5,
    }, {
        opacity: 1,
    }]

    let fadeInAndGrow = [{
        opacity: 0.5,
        width: "97%",
        height: "97%"
    }, {
        opacity: 1,
        width: "99%",
        height: "99%"
    }]


    // If current child already exists
    if(imgParent.children.length !== 0){
        // Remove it
        imgParent.removeChild(imgParent.children[0]);

        // Animate the element; (keyframes, duration_of_animation)
        imgToDisplay.animate(fadeInAnimation, {easing: 'ease-in', duration: 400});
    } else{
        // Animate fade in and grow
        imgToDisplay.animate(fadeInAndGrow, {easing: 'ease-in', duration: 800});
    }

    imgParent.appendChild(imgToDisplay)

    console.log(imgClicked.getBoundingClientRect());

}

export default Photography;