import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineInfo from './TimelineDetails';
import 'react-vertical-timeline-component/style.min.css';
import './css/Timeline.css';

/**A timeline generator for different events */
export default function Timeline(props){

    return(
        <div className="workExperienceTimeline">
            <VerticalTimeline>
                {TimelineInfo.workExperience.map((work, index) => {
                    let backgroundColour = work.bgColor == null ? '#424242' : work.bgColor;
                    let arrowColor = work.arrowColor == null ? '#1A77B5' : work.arrowColor;
                    console.log(work.bgColor)

                    return(
                        <VerticalTimelineElement key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: backgroundColour , color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
                            iconStyle={{ background: '#1A77B5', color: '#fff' }}
                            icon={work.icon}
                            date={work.timeframe}>
                                
                            <h3 className="vertical-timeline-element-title"> {work.org} </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                <i>
                                    {work.role} • {work.duration}
                                </i>
                            </h4>

                            <p>
                                {work.summary}
                            </p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>

            {/* <VerticalTimeline layout='1-column'>
                {TimelineInfo.education.map((edu, index) => {
                        let backgroundColour = edu.bgColor == null ? '#424242' : edu.bgColor;
                        let arrowColor = edu.arrowColor == null ? '#1A77B5' : edu.arrowColor;
                        console.log(edu.bgColor)

                        return(
                            <VerticalTimelineElement key={index}
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: backgroundColour , color: '#fff' }}
                                contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
                                iconStyle={{ background: '#1A77B5', color: '#fff' }}
                                icon={edu.icon}
                                date={edu.timeframe}>
                                    
                                <h3 className="vertical-timeline-element-title"> {edu.institution} </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    <i>
                                        {edu.degree} 
                                    </i>
                                </h4>

                                <p>
                                    {edu.yearOfStudy}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
            </VerticalTimeline> */}
        </div>
    );
}