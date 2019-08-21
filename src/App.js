import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from './components/Header';
import Fab from '@material-ui/core/Fab';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import './App.css';

/**Move user to appropriate section within the app
 * @param location (String) The section to move the user to.
 */
function moveUserToSection(location){
  switch(location){
      case "home":
          window.location.replace("/");
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

      case "top":
          // Sroll back to the top of the page
          document.querySelector("html").scrollIntoView(true);
          break;
      default:
          break;
  }
  
}

function App() {

  return (
    <div className="App">
      <title>Bilal Ahmed</title>

      <Header className="appHeader" moveUserToSection={moveUserToSection}/>
      <div className="Body">

      <MainBody moveUserToSection={moveUserToSection}/>
      
      </div>

      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
