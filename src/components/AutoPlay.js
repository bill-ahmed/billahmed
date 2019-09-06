import React, { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SwipeableViews from 'react-swipeable-views';
import './css/AutoPlay.css';

const AutoPlayPhotos = autoPlay(SwipeableViews);

function AutoPlay(props){

    // Styles for autoplay prop
    const useStyles = makeStyles(theme => ({
        img: {
            width: "100%",
            maxWidth: props.maxWidth ? props.maxWidth : "650px",
            overflow: "hidden",
        },
        stepper: {
            justifyContent: 'space-around',
        }
    }));

    const [activeStep, setActiveStep] = useState(0);
    const [pause, setPause] = useState(false);
    const imageList = props.imageList;
    const maxSteps = imageList.length;

    var classes = useStyles();  // Styles added to GridList and other elements

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
        // If user has not paused the slide show, then continue
        if(!pause){
            setActiveStep(step);
        }
    }

    /**Set if the user has paused the slide show or not*/
    const handlePauseAndPlay = () => {
        setPause(!pause);
    }

    return(
        <div className="autoplayimages">
            {/* Control auto-play of images */}
            <AutoPlayPhotos axis="x" index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                {imageList.map((pic) => (
                    <div key={pic.title}>
                        <img className={classes.img} src={pic.img} alt={pic.title}/>
                        <div className={classes.imgInfo}>
                            <h4><i>{pic.title}</i></h4>
                        </div>
                    </div>
                ))}
            </AutoPlayPhotos>

            <IconButton onClick={handlePauseAndPlay}>
                {pause ? <PlayArrowIcon/> : <PauseIcon/>}
                
            </IconButton>

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
    );
}

export default AutoPlay;