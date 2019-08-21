import { getPortfolioGalleryData } from './GalleryData';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './css/Hobbies.css';
import { Paper } from '@material-ui/core';

// All the images used
const portfolioData = getPortfolioGalleryData();

// Styles for GridList and all child elements
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'white',
      border: "solid white 4px",
      borderRadius: '10px',
    },
    gridList: {
      width: 850,
      height: 600,
    },
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
        width: "95%",
        height: "95%"
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

/**A component to represent the hobbies section */
function Hobbies(props) {

    // Keep track of which image is selected, so appropriate one can be displayed larger
    const [currImage, setCurrImage] = useState();

    var classes = useStyles();  // Styles added to GridList and other elements
    var isMobileUser = props.isMobileUser();

    // Check if mobile user
    if(isMobileUser) {
        classes = mobileStyles();
    }

    /**Hadle user clicking on an image
     * @param imageClicked The image the use has clicked, given by require('path/to/file.jpg')
     */
    const handleImageClick = (imgID, imageClicked) => {
        animateImageClick(imgID, imageClicked);
        //setCurrImage(imageClicked);
    }

    return(
        <div id="hobbies" className="hobbies">
            <div>
                <h1><span>Photography (WIP!)</span></h1>
                <div className="hobbiesContainer">
                    <div className="imageViewer" data-aos="fade-up" data-aos-once="true">
                        <div>
                            <p>
                                In my free time, I especially enjoy photography. Most of my subjects are relatively still,
                                although I do ocassionally attempt to photograph moving objects. The following is a small sample
                                of the images i've taken.
                            </p>
                            <div className="imageViewerContainer" id="imageViewerContainer">
                                {currImage && <img width="99%" height="99%" src={currImage} alt=""/>}
                            </div>
                            <p><strong>Click an image to enlarge it here.</strong></p>
                        </div>
                    </div>

                    <div className={classes.root} data-aos="fade-down" data-aos-once="true">
                        <GridList cellHeight={270} cols={6} className={classes.gridList}>
                            {portfolioData.map(tile => (

                                <GridListTile onClick={() => handleImageClick(tile.title, tile.img)} key={tile.img} cols={tile.cols || 1}>
                                    <img src={tile.img} alt={tile.title} id={tile.title}/>

                                    <GridListTileBar title={tile.title}/>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hobbies;