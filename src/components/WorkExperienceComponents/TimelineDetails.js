import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export default {
    "education": [
        {
            institution: "University of Toronto",
            degree: "Computer Science, B.Sc., Specialist",
            yearOfStudy: "3rd year",
            location: "Toronto, ON",
            timeframe: "Sept. 2017 - Present",
            icon: <SchoolIcon/>,
        }
    ],
    "workExperience": [
        {
            org: "Zymewire",
            role: "Software Developer",
            location: "Toronto, ON",
            timeframe: "Jan. 2020 - Present",
            duration: "WIP",
            summary: "Summary is WIP!",
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
            summary: "Summary is WIP!",
            icon: <WorkIcon/>,
            bgColor: '#62B2AE',
            arrowColor: '#62B2AE'
        },
        {
            org: "Toronto Police Service",
            role: "Administrative Assistant",
            location: "Toronto, ON",
            timeframe: "Jan. 2017 - April 2017",
            duration: "4 months",
            summary: "Summary is WIP!",
            icon: <WorkIcon/>,
            bgColor: '#CE1141',
            arrowColor: '#CE1141'
        }
    ]

}