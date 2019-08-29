import React, { useState } from 'react';
import Photography from './HobbiesComponents/Photography';
import './css/Hobbies.css';


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
                <h1 data-aos="fade-up" data-aos-once="true">Photography (WIP!)</h1>
                <div className="hobbiesContainer">
                    <Photography isMobileUser={isMobileUser}/>
                </div>
            </div>

        </div>
    );
}

export default Hobbies;
