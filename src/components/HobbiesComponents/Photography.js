import React, { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import { getPortfolioGalleryData } from '../GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';

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
    gridListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 750,
        height: 500,
    },
    img: {
        width: "100%",
        maxWidth: "650px",
        overflow: "hidden",
    },
    stepper: {
        justifyContent: 'space-around',
    }
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
            <div className="largeImageViewer" id="largeImageViewer">

                {!props.isMobileUser && <div>
                    <GridList cellHeight={270} cols={6} className={classes.gridList}>
                        {portfolioData.map(tile => (
                            <GridListTile onClick={() => handleImageClick(tile.title, tile.img)} key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} id={tile.title}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>}
                
                <div className="rightContainer">
                    {/* Control auto-play of images */}
                    <AutoPlayPhotos axis="x" index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                        {portfolioData.map((pic) => (
                            <div key={pic.title}>
                                <img className={classes.img} src={pic.img} alt={pic.title}/>
                                <div className={classes.imgInfo}>
                                    <h4><i>{pic.title}</i></h4>
                                </div>
                            </div>
                        ))}
                    </AutoPlayPhotos>

                    {/* Controls buttons for the slide show */}
                    <MobileStepper className={classes.stepper} steps={maxSteps} position="static" variant="text" activeStep={activeStep} 
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
                </div>
            </div>
        </div>
    );
}

export default Photography;