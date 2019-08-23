import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Photography from './HobbiesComponents/Photography';
import './css/Hobbies.css';
import { Paper } from '@material-ui/core';


/**A component to represent the hobbies section */
function Hobbies(props) {

    // Keep track of which image is selected, so appropriate one can be displayed larger
    const [currImage, setCurrImage] = useState();

    var isMobileUser = props.isMobileUser();

    // Check if mobile user
    if(isMobileUser) {
    }

    return(
        <div id="hobbies" className="hobbies">
            <div>
                <h1><span>Photography (WIP!)</span></h1>
                <div className="hobbiesContainer">
                    <Photography/>
                </div>
            </div>

        </div>
    );
}

export default Hobbies;