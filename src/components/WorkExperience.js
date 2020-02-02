import React from 'react';
import './css/WorkExperience.css';
import Timeline from './WorkExperienceComponents/Timeline';

/**Work Experience Page */
export default function WorkExperience(props){
    return(
        <div className="workExperience">
            <h1 id="workExperienceHeading">Work Experience</h1>
            <Timeline/>
        </div>
    );
}