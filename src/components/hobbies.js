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
      width: "80%",
      height: 300,
      flexWrap: "nowrap",
      transform: 'translateZ(0)',
    },
  }));


/**A component to represent the hobbies section */
function Hobbies(props) {

    // Keep track of which image is selected, so appropriate one can be displayed larger
    const [currImage, setCurrImage] = useState(require('../assets/portfolio/IMG_3606.JPG'));

    var classes = useStyles();  // Styles added to GridList and other elements
    var isMobileUser = false;

    // Check if mobile user
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)) {
        isMobileUser = true;
        classes = mobileStyles();
    }

    /**Hadle user clicking on an image
     * @param imageClicked The image the use has clicked, given by require('path/to/file.jpg')
     */
    const handleImageClick = (imageClicked) => {
        setCurrImage(imageClicked);
    }

    return(
        <div id="hobbies" className="hobbies">
            <div>
                <h1>Hobbies (WIP!)</h1>
                <Divider variant="middle"/>
                <div className="hobbiesContainer">
                    <div className="imageViewer">
                        <Paper elevation={1}>
                            <p>
                                In my free time, I especially enjoy photography. Most of my subjects tend to be relatively still,
                                although I do ocassionally attempt to photograph moving objects.
                            </p>
                            <p>Click an image to enlarge it.</p>
                            <div className="imageViewerContainer">
                                <img width="98%" height="98%" src={currImage} alt="test"/>
                            </div>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <GridList cellHeight={270} cols={6} className={classes.gridList}>
                            {portfolioData.map(tile => (

                                <GridListTile onClick={() => handleImageClick(tile.img)} key={tile.img} cols={tile.cols || 1}>
                                    <img src={tile.img} alt={tile.title}/>

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