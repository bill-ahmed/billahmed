import React, { useState } from 'react';
import Photography from './HobbiesComponents/Photography';
import './css/Hobbies.css';


/**A component to represent the hobbies section */
function Hobbies(props) {

    // Keep track of which image is selected, so appropriate one can be displayed larger
    const [currImage, setCurrImage] = useState();

    var mobileUser = props.isMobileUser();

    return(
        <div id="hobbies" className="hobbies">
            <h1 data-aos="fade-up" data-aos-once="true">Hobbies & Interests (WIP!)</h1>

            <div className="hobbiesContainer">
                <Photography id="photographyShowcase" mobileUser={mobileUser}/>
                <div id="otherInterests" data-aos="fade-up" data-aos-once="true">
                    <h1>Other Interests (WIP)</h1>
                </div>
            </div>

        </div>
    );
}

export default Hobbies;
