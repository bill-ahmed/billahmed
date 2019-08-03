import React from 'react';
import Hobbies from './hobbies';
import Projects from './projects';
import './css/MainBody.css';

/**Main body section, which includes projects and hobbies */
function MainBody(props) {
    return(
        <div className="mainBody">
            <Projects/>
            <Hobbies/>
        </div>
    );
}

export default MainBody;