import React from 'react';
import Hobbies from './Hobbies';
import Projects from './Projects';
import './css/MainBody.css';
import WorkExperience from './WorkExperience';

/**Main body section, which includes projects and hobbies */
function MainBody(props) {
    return(
        <div className="mainBody">
            <Projects moveUserToSection={props.moveUserToSection} isMobileUser={props.isMobileUser}/>
            <WorkExperience/>
            {/* <Hobbies moveUserToSection={props.moveUserToSection} isMobileUser={props.isMobileUser}/> */}
        </div>
    );
}

export default MainBody;