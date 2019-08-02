import React from 'react';
import './css/MainBody.css';
function MainBody(props) {
    return(
        <div className="mainBody">
            <div id="projects" className="projects">
                <h1>Projects</h1>
                <h3>Coming soon!</h3>
            </div>

            <div id="hobbies" className="hobbies">
                <h1>Hobbies</h1>
                <div className="projectsContainer">
                    
                </div>
                <h3>Coming soon!</h3>
            </div>
        </div>
    );
}

export default MainBody;