import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export default {
    "workExperience": [
        {
            org: "Zymewire",
            role: "Software Developer",
            location: "Toronto, ON",
            timeframe: "Jan. 2020 - Present",
            duration: "8 months",
            summary: 
                <p>
                    Working alongisde a passionate & agile team has been an incredible learning experience. More details to come!
                </p>
            ,
            icon: <WorkIcon fontSize="large"/>,
            bgColor: '#55AF57',
            arrowColor: '#55AF57',
        },
        {
            org: "Ontario Ministry of Education",
            role: "QA Automation",
            location: "Toronto, ON",
            timeframe: "Sept. 2018 - April 2019",
            duration: "8 months",
            summary: 
                <p>During this first internship, I learned many new technologies/frameworks in software development and automation. 
                    <br/><br/>With exposure to agile methodologies, my experience here laid the groundwork for future learning.
                </p>,
            icon: <WorkIcon/>,
            bgColor: '#62B2AE',
            arrowColor: '#62B2AE'
        },
        {
            org: "University of Toronto",
            role: "Computer Science, B.Sc.",
            yearOfStudy: "3rd year",
            location: "Toronto, ON",
            timeframe: "Sept. 2017 - Present",
            duration: "4 Years",
            icon: <SchoolIcon/>,
            summary: 
                <p>
                    The beginnings of my interest and passion in Software Engineering. Exploration into software,
                    hardware & algorithms has opened many doors and kindled a sense of curiosity.
                </p>,
            bgColor: '#192E5B',
            arrowColor: '#192E5B'
        },
        {
            org: "Toronto Police Service",
            role: "Administrative Assistant",
            location: "Toronto, ON",
            timeframe: "Jan. 2017 - April 2017",
            duration: "4 months",
            summary: 
                <p>
                    
                </p>
            ,
            icon: <WorkIcon/>,
            bgColor: '#CE1141',
            arrowColor: '#CE1141'
        }
    ]

}