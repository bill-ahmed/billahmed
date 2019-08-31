import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Header.css';


function Header(props){
    // If user is in mobile view, give the nav buttons a border
    var isMobileUser = global.isMobileUser;
    let navButtonVariant = "text";
    if(isMobileUser){
        navButtonVariant = "outlined";
    }

    const handleButtonClick = props.moveUserToSection;

    return(
        <div id="headerContent" className="headerContent">
            <div className="navigation">
                {/* <div className="leftNavigation">
                    {isMobileUser && <NavigationDrawer handleButtonClick={handleButtonClick}/>}
                </div> */}

                <ButtonGroup size="medium" color="inherit" className="rightNavigation">
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("home")}>Home</Button>
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("projects")}>Projects</Button>
                    <Button className="navButton" size="medium" variant={navButtonVariant} color="inherit" onClick={() => handleButtonClick("hobbies")}>Hobbies</Button>
                </ButtonGroup>
            </div>

            <div className="shortIntro">
                {/* <h1>Bilal Ahmed</h1> */}

                {/* My full name */}
                <svg id="fullName" width="755" height="120" viewBox="0 0 755 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.88281 113V10.625H39.3516C50.4609 10.625 58.8047 12.9219 64.3828 17.5156C70.0078 22.1094 72.8203 28.9062 72.8203 37.9062C72.8203 42.6875 71.4609 46.9297 68.7422 50.6328C66.0234 54.2891 62.3203 57.125 57.6328 59.1406C63.1641 60.6875 67.5234 63.6406 70.7109 68C73.9453 72.3125 75.5625 77.4688 75.5625 83.4688C75.5625 92.6562 72.5859 99.875 66.6328 105.125C60.6797 110.375 52.2656 113 41.3906 113H5.88281ZM19.3828 65.1172V101.961H41.6719C47.9531 101.961 52.8984 100.344 56.5078 97.1094C60.1641 93.8281 61.9922 89.3281 61.9922 83.6094C61.9922 71.2812 55.2891 65.1172 41.8828 65.1172H19.3828ZM19.3828 54.2891H39.7734C45.6797 54.2891 50.3906 52.8125 53.9062 49.8594C57.4688 46.9062 59.25 42.8984 59.25 37.8359C59.25 32.2109 57.6094 28.1328 54.3281 25.6016C51.0469 23.0234 46.0547 21.7344 39.3516 21.7344H19.3828V54.2891Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M107.695 113H94.6875V36.9219H107.695V113ZM93.6328 16.7422C93.6328 14.6328 94.2656 12.8516 95.5312 11.3984C96.8438 9.94531 98.7656 9.21875 101.297 9.21875C103.828 9.21875 105.75 9.94531 107.062 11.3984C108.375 12.8516 109.031 14.6328 109.031 16.7422C109.031 18.8516 108.375 20.6094 107.062 22.0156C105.75 23.4219 103.828 24.125 101.297 24.125C98.7656 24.125 96.8438 23.4219 95.5312 22.0156C94.2656 20.6094 93.6328 18.8516 93.6328 16.7422Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M142.711 113H129.703V5H142.711V113Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M210.562 113C209.812 111.5 209.203 108.828 208.734 104.984C202.688 111.266 195.469 114.406 187.078 114.406C179.578 114.406 173.414 112.297 168.586 108.078C163.805 103.812 161.414 98.4219 161.414 91.9062C161.414 83.9844 164.414 77.8438 170.414 73.4844C176.461 69.0781 184.945 66.875 195.867 66.875H208.523V60.8984C208.523 56.3516 207.164 52.7422 204.445 50.0703C201.727 47.3516 197.719 45.9922 192.422 45.9922C187.781 45.9922 183.891 47.1641 180.75 49.5078C177.609 51.8516 176.039 54.6875 176.039 58.0156H162.961C162.961 54.2188 164.297 50.5625 166.969 47.0469C169.688 43.4844 173.344 40.6719 177.938 38.6094C182.578 36.5469 187.664 35.5156 193.195 35.5156C201.961 35.5156 208.828 37.7188 213.797 42.125C218.766 46.4844 221.344 52.5078 221.531 60.1953V95.2109C221.531 102.195 222.422 107.75 224.203 111.875V113H210.562ZM188.977 103.086C193.055 103.086 196.922 102.031 200.578 99.9219C204.234 97.8125 206.883 95.0703 208.523 91.6953V76.0859H198.328C182.391 76.0859 174.422 80.75 174.422 90.0781C174.422 94.1562 175.781 97.3438 178.5 99.6406C181.219 101.938 184.711 103.086 188.977 103.086Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M256.055 113H243.047V5H256.055V113Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M371.227 86.2812H328.336L318.703 113H304.781L343.875 10.625H355.688L394.852 113H381L371.227 86.2812ZM332.414 75.1719H367.219L349.781 27.2891L332.414 75.1719Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M419.602 46.1328C425.367 39.0547 432.867 35.5156 442.102 35.5156C458.18 35.5156 466.289 44.5859 466.43 62.7266V113H453.422V62.6562C453.375 57.1719 452.109 53.1172 449.625 50.4922C447.188 47.8672 443.367 46.5547 438.164 46.5547C433.945 46.5547 430.242 47.6797 427.055 49.9297C423.867 52.1797 421.383 55.1328 419.602 58.7891V113H406.594V5H419.602V46.1328Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M498.141 36.9219L498.492 45.3594C504.07 38.7969 511.594 35.5156 521.062 35.5156C531.703 35.5156 538.945 39.5938 542.789 47.75C545.32 44.0938 548.602 41.1406 552.633 38.8906C556.711 36.6406 561.516 35.5156 567.047 35.5156C583.734 35.5156 592.219 44.3516 592.5 62.0234V113H579.492V62.7969C579.492 57.3594 578.25 53.3047 575.766 50.6328C573.281 47.9141 569.109 46.5547 563.25 46.5547C558.422 46.5547 554.414 48.0078 551.227 50.9141C548.039 53.7734 546.188 57.6406 545.672 62.5156V113H532.594V63.1484C532.594 52.0859 527.18 46.5547 516.352 46.5547C507.82 46.5547 501.984 50.1875 498.844 57.4531V113H485.836V36.9219H498.141Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M643.758 114.406C633.445 114.406 625.055 111.031 618.586 104.281C612.117 97.4844 608.883 88.4141 608.883 77.0703V74.6797C608.883 67.1328 610.312 60.4062 613.172 54.5C616.078 48.5469 620.109 43.9062 625.266 40.5781C630.469 37.2031 636.094 35.5156 642.141 35.5156C652.031 35.5156 659.719 38.7734 665.203 45.2891C670.688 51.8047 673.43 61.1328 673.43 73.2734V78.6875H621.891C622.078 86.1875 624.258 92.2578 628.43 96.8984C632.648 101.492 637.992 103.789 644.461 103.789C649.055 103.789 652.945 102.852 656.133 100.977C659.32 99.1016 662.109 96.6172 664.5 93.5234L672.445 99.7109C666.07 109.508 656.508 114.406 643.758 114.406ZM642.141 46.2031C636.891 46.2031 632.484 48.125 628.922 51.9688C625.359 55.7656 623.156 61.1094 622.312 68H660.422V67.0156C660.047 60.4062 658.266 55.2969 655.078 51.6875C651.891 48.0312 647.578 46.2031 642.141 46.2031Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                    <path d="M685.383 74.3281C685.383 62.6562 688.148 53.2812 693.68 46.2031C699.211 39.0781 706.453 35.5156 715.406 35.5156C724.312 35.5156 731.367 38.5625 736.57 44.6562V5H749.578V113H737.625L736.992 104.844C731.789 111.219 724.547 114.406 715.266 114.406C706.453 114.406 699.258 110.797 693.68 103.578C688.148 96.3594 685.383 86.9375 685.383 75.3125V74.3281ZM698.391 75.8047C698.391 84.4297 700.172 91.1797 703.734 96.0547C707.297 100.93 712.219 103.367 718.5 103.367C726.75 103.367 732.773 99.6641 736.57 92.2578V57.3125C732.68 50.1406 726.703 46.5547 718.641 46.5547C712.266 46.5547 707.297 49.0156 703.734 53.9375C700.172 58.8594 698.391 66.1484 698.391 75.8047Z" stroke="white" stroke-width="5" mask="url(#path-1-outside-1)"/>
                </svg>


                <h3><i>A Computer Science student at the University of Toronto that's passionate
                     about web design and software development.</i></h3>
            </div>
            <br/>
            <br/>
            <div className="socialLinks">

                {/* GitHub logo */}
                <Tooltip title="GitHub">
                    <Fab size="large" className="socialLink" href="https://github.com/bill-ahmed" target="_blank">
                        <img alt="Link to GitHub" src={require("../assets/github-brands.svg")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip>
                
                {/* LinkedIn logo */}
                <Tooltip title="LinkedIn">
                    <Fab size="large" className="socialLink" href="https://www.linkedin.com/in/bill-ahmed/" target="_blank">
                        <img alt="Link to LinkedIn" className="roundedImage" src={require("../assets/linkedin-in-brands.svg")} width="60%" height="60%"/>
                    </Fab>
                </Tooltip>

                {/* Facebook logo */}
                {/* <Tooltip title="Facebook">
                    <Fab size="large" className="socialLink" href="https://www.facebook.com/BillAhmed4343" target="_blank">
                        <img alt="Link to Facebook" className="roundedImage" src={require("../assets/facebook-brands.svg")} width="80%" height="80%"/>
                    </Fab>
                </Tooltip> */}

                {/* Resume */}
                <Tooltip title="CV/Resume">
                    <Fab size="large" className="socialLink" variant="extended">
                        My CV/Resume
                    </Fab>
                </Tooltip>

            </div>
            <IconButton size="medium" color="inherit" id="linkToProjectSection" onClick={() => handleButtonClick("projects")}>
                <ExpandMoreIcon fontSize="large"/>
            </IconButton>
            <br/>
            <br/>
            
        </div>
    );
}

export default Header;