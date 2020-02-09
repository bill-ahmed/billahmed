import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import isMobileUser from './api/UserInfo';
import './App.css';

/**Move user to appropriate section within the app
 * @param location (String) The section to move the user to.
 */
function moveUserToSection(location){
  switch(location){
      case "home":
        document.querySelector('.headerContent').scrollIntoView({ 
          behavior: 'smooth' 
      });
        
      break;
      case "projects":
          // Sroll down to projects section
          document.querySelector('#projects').scrollIntoView({ 
              behavior: 'smooth' 
          });
          break;
      case "hobbies":
          // Scroll down to hobbies section
          document.querySelector('#hobbies').scrollIntoView({ 
              behavior: 'smooth' 
          });
          break;
      
      case "workExperience":
          document.querySelector('.workExperience').scrollIntoView({ 
            behavior: 'smooth' 
        });
        break;

      case "top":
          // Sroll back to the top of the page
          document.querySelector("html").scrollIntoView(true);
          break;
      default:
          break;
  }
  
}

function App() {

  // When user scrolls far enough, show navigation at top
  window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    var threshhold = document.querySelector('#headerContent').scrollHeight - 300;

    var headerNavBar = document.getElementById('topNavigation');
    // If user scrolls far enough, show the top navigation
    if(currentScrollPos > threshhold){
      
      headerNavBar.style.position = 'fixed';
      headerNavBar.style.top = 0;
      headerNavBar.style.zIndex = 1100;
      headerNavBar.style.backgroundColor = '#212121';
    } else {
      headerNavBar.style.position = 'relative'
      headerNavBar.style.backgroundColor = 'inherit';
    }

  }

  return (
    <div className="App">
      <title>Bilal Ahmed</title>

      <Header className="appHeader" moveUserToSection={moveUserToSection} isMobileUser={isMobileUser}/>
      <div className="Body">

      <MainBody moveUserToSection={moveUserToSection} isMobileUser={isMobileUser}/>
      
      </div>

      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
