import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './scss/style.scss';
import App from './App';
import './script.js';
import reportWebVitals from './reportWebVitals';
import { div } from 'prelude-ls';
import pic from '../src/images/Opera Snapshot_2022-07-02_210830_index3.html.png';
import pic1 from '../src/images/Opera Snapshot_2022-07-05_020304_index.html.png'
import me from '../src/images/me.jpeg';
import logo from './images/Y-764.png';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React Components
class Navbar extends React.Component {
  render() {
    return (
      
      <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#!"><img src={logo} id="img_logo" alt=""></img></a>
        </div>
        <nav>
          <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
          <ul class="nav-list">
            <li>
              <a class="link" href="#titreAbout"><b>01.</b> About</a>
            </li>
            <li>
              <a class="link" href="#titreexperiens"><b>02.</b> Experience</a>
            </li>
            <li>
              <a class="link" href="#work"><b>03.</b> Work</a>
            </li>
            <li>
              <a class="link" href="#componentContact"><b>04.</b> Contact</a>
            </li>
            <li>
            </li>
            <li>
            <a href="https://drive.google.com/file/d/1QIdPkUV0iBiBp2tvUX-hdUR1-sFbKkLk/view?usp=sharing" class="link" id="btnresume"> Resume </a> </li>
            <li><button class="link" id="btnblog"  href="#blog">Blog</button></li>
          </ul>
        </nav>
      </div>
    </section>
    
    )
  }
  }

ReactDOM.render(<Navbar />,document.getElementById('navbar'));

class AboutUS extends React.Component {
  render() {
    return (
      <div class="container-fluid"  id="compenent1">
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
      <div class="col-lg-8">
        <p id="paragraph">Hello! My name is YASSINE AYACHE, a self-taught Designer & Front-end Developer. <br></br><br></br>
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to build products that provide pixel-perfect, performant experiences.<br></br>
        I decided to drop out of school after getting my Associate degree here in Morocco. I've always been obsessed with computers and everything related to the web since I got my first computer. I started spending more and more time in front of that computer, from then till today.<br></br><br></br>
        I mainly love to work with these technologies:
        </p>
        <div id="teufel">
              <div class="holle" id="entscheidest">
                <p><b>🂡</b> React <br></br>
                <b>🂢</b> Anguler <br></br>
                <b>🂣</b> Laravel</p>     
              </div>   
              <div class="holle"><p>
                <b>🂤</b> Styled-components <br></br>
                <b>🂥</b> .Net <br></br>
                <b>🂦</b> Webpack </p></div>
         </div>
        </div>
      <div class="col-lg-4 staatsburgerschaft">
        <div id="border">  </div>
              <div class="praktikum">
                <img src={me}  alt="Avatar" class="image"></img>
                <div class="overlay">
                </div>
              </div>
      </div>

    </div>
    <div class="col-sm-2"></div>
  </div>
</div>
    )
  }
  }

ReactDOM.render(<AboutUS />,document.getElementById('aboutus'));


class Project extends React.Component {
  render() {
    const componentproject = {
      GeolocationPosition : "center",
    }
    const smalltittel = {
      marginBottom : "-50px",
      fontSize : "12px",
    }
    const tools = {
      marginTop: "-20px !important",
      transform: "translate(0px, 20px)",
    }
    return (
    <section class="container section-2" style={componentproject}>
    <div class="row">
      <div class="col-sm-10 offer offer-1">
        <img src={pic} alt="a computer in dark with with white shadow" class="col-sm-6 offer-img offer-1-img">
       </img>
        <div class="col-sm-6 offer-description offer-desc-1">
          <p style={smalltittel}>Featured Project</p>
          <h1 class="offer-title">Netflix</h1>
          <p class="offer-hook">A platform that allows watched a movies & series</p>
        <p style={tools} id="tools">SCSS   Bootstrap   javascript    HTML</p>
        </div>
      </div>

            <div class="col-sm-10 offer offer-1">
        <img src={pic1} alt="a computer in dark with with white shadow" class="col-sm-6 offer-img offer-1-img">
       </img>
        <div class="col-sm-6 offer-description offer-desc-1">
          <p style={smalltittel}>Featured Project</p>
          <h1 class="offer-title">Portfolio</h1>
          <p class="offer-hook">A Page web for Ehya cann you show service this  company also 
          Advantages of dealing with them.</p>
        <p style={tools} id="tools">SCSS   Bootstrap   Javascript    Webpack</p>
        </div>
      </div>
      </div>
    </section>
    )
  }
  }

ReactDOM.render(<Project />,document.getElementById('project'));



//Component the media and email
const CONTENT_DEFINITION = [
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Front end development",
    panel: (
      <div>
        <p id="verdienen">Front end development</p>
        <p id="schmerz">Experienced with:</p>
        <p>&#127757; | HTML/CSS/JavaScript</p>
        <p>&#10024; | Reactjs</p>
        <p>&#11088; | Anguler</p>
        <p>&#127761; | Nextjs</p>
      </div>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Back end development",
    panel: (
      <div>
        <p id="verdienen">Back end development</p>
        <p id="schmerz">Experienced with:</p>
        <p>&#127770; | Nodejs</p>
        <p>&#127801; | Laravel</p>
        <p>&#127776; | C/C#</p>
        <p>&#127774; | Java</p>

      </div>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "JavaScript frameworks libraries",
    panel: (
      <div>
        <p id="verdienen">JavaScript frameworks libraries</p>
        <p id="schmerz">Experienced with:</p>
        <p>&#10024; | React Js</p>
        <p>&#127815; | Styed-components</p>
        <p>💪 | Bootstrap/Tailwind/Material-UI</p>
        <p>💪 | Kite JS</p>
      </div>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Graphic, UI/UX Design",
    panel: (
      <div>
        <p id="verdienen">Graphic, UI/UX Design</p>
        <p id="schmerz">Experienced with:</p>
        <p>&#127913; | Adobe Illustrator</p>
        <p>&#127882; | Photoshop</p>
        <p>&#10024; | Figma</p>
        <p>&#127914; | Adobe XD</p>
      </div>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Version control",
    panel: (
      <div>
        <p id="verdienen">Version control</p>
        <p id="schmerz">Familiar with:</p>
        <p>&#9875; | Git/Github</p>
        <p>&#9935; | Shell</p>

      </div>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Another",
    panel: (
      <div>
        <p id="verdienen">Another</p>
        <p id="schmerz">Experienced with:</p>
        <p>&#127918; | ASP.net</p>
        <p>&#127919; | Webpack</p>
        <p>&#9989; | ADO.net</p>
        <p>&#9939; | Android</p>
        <p>&#9935; | Wordpress</p>
      </div>
    ),
  },
];

function ReTab(props) {
  const [selected, setSelected] = React.useState(props.selected || 0);
  const tabs = [],
        panels = [];

  for (const tabItemDefinition of props.contentDefinition) {
    const uid = tabItemDefinition.uid;
    const tabHtmlId = `retab__tabslist__tab-${uid}`;
    const panelHtmlId = `retab__tabpanel-${uid}`;

    tabs.push({
      uid: uid,
      htmlId: tabHtmlId,
      panelHtmlId: panelHtmlId,
      content: tabItemDefinition.tab,
    });

    panels.push({
      uid: uid,
      htmlId: panelHtmlId,
      tabHtmlId: tabHtmlId,
      content: tabItemDefinition.panel,
    });
  }

  return (
    <div className="retab">
      <Tabs ariaLabel={props.ariaLabel}
            selected={selected}
            onTabSelected={setSelected}
            definition={tabs} />
      {
        selected <= tabs.length &&
        <Panel key={panels[selected].uid}
               controlledBy={panels[selected].tabHtmlId}>
          {panels[selected].content}
        </Panel>
      }
    </div>
  );
}
function Tabs({ariaLabel, selected, onTabSelected, definition}) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="retab__tablist">
      {definition.map((tabDefinition, index) =>
        <Tab key={tabDefinition.uid}
             id={tabDefinition.htmlId}
             controls={tabDefinition.panelHtmlId}
             isSelected={index === selected}
             onSelected={() => onTabSelected(index)}>
          {tabDefinition.content}
        </Tab>
      )}
    </div>
  );
}
function Tab({htmlId, controls, isSelected, onSelected, children}) {
  return (
    <button id={htmlId} role="tab"
            aria-controls={controls}
            onClick={onSelected}
            className={`retab__tablist__tab ${isSelected ? 'selected' : ''}`}>
      {children}
    </button>
  );
}
function Panel({htmlId, controlledBy, children}) {
  return (
    <div id={htmlId}
         role="tabpanel"
         aria-labelledby={controlledBy}
         className="retab__tabpanel">
      {children}
    </div>
  );
}

ReactDOM.render(
  <ReTab
    selected={0}
    ariaLabel="Vertical Tabs"
    contentDefinition={CONTENT_DEFINITION}
  />,
  document.getElementById('react-tabs-slot')
);
class AnotherPro extends React.Component {

  render() {
    const styletitre = {
      fontWeight:"700",
      textAlign: "center",
      backgroundColor:"red !important",
      marginBottom:"70px",
    }
    return ( 
<div class="container mt-3">
  <div class="row moglichkeit" id="work">

  <h2 style={styletitre}>Other Noteworthy Projects</h2>

    <div class="col-sm-4 col-xl-4 p-3">
      <div class="project-inner otherpro">
        <header>
        <div class="project-top">
          <div class="folder">
          <i class="far fa-folder"></i>
              </div><div class="project-links"></div>
              </div><h3 class="project-title pro_title">Nice resume: ITTweb</h3>
              <div class="project-description"><p class="pro_description">I got the chance to contribute to this tool which is amazing tool that makes building a resume very simple and easy.</p>
              </div>
              </header>
              <footer>
                <ul class="project-tech-list pro_tech_list">
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>Tailwindcss</li>
                  </ul>
                  </footer>
                  </div>
                </div>
    <div class="col-sm-4 col-xl-4 p-3">
    <div class="project-inner otherpro">
        <header>
        <div class="project-top">
          <div class="folder">
          <i class="far fa-folder"></i>
              </div><div class="project-links"></div>
              </div><h3 class="project-title pro_title">Nice resume: Resume builder</h3>
              <div class="project-description"><p class="pro_description">I got the chance to contribute to this tool which is amazing tool that makes building a resume very simple and easy.</p>
              </div>
              </header>
              <footer>
                <ul class="project-tech-list pro_tech_list">
                  <li>Gatsby</li>
                  <li>Formik</li>
                  <li>Tailwindcss</li>
                  <li>in18next</li>
                  <li>Firebase</li>
                  <li>nanoevents</li>
                  </ul>
                  </footer>
                  </div>
    </div>
    <div class="col-sm-4 col-xl-4 p-3">
    <div class="project-inner otherpro">
        <header>
        <div class="project-top">
          <div class="folder">
          <i class="far fa-folder"></i>
              </div><div class="project-links"></div>
              </div><h3 class="project-title pro_title">Nice resume: Resume builder</h3>
              <div class="project-description"><p class="pro_description">I got the chance to contribute to this tool which is amazing tool that makes building a resume very simple and easy.</p>
              </div>
              </header>
              <footer>
                <ul class="project-tech-list pro_tech_list">
                  <li>Gatsby</li>
                  <li>Formik</li>
                  <li>Tailwindcss</li>
                  <li>in18next</li>
                  <li>Firebase</li>
                  <li>nanoevents</li>
                  </ul>
                  </footer>
                  </div>
    </div>

  </div>
</div>
    )
  }
  }
ReactDOM.render(<AnotherPro />,document.getElementById('anotherpro'));




class Contact extends React.Component {
  render() {
    const mystyle = {
      marginBottom:"50px",
    textAlign:"center",
    backgroundColor:"red",
    padding: "70px 10px",
    };
    const titreContact = {
      fontSize: "60px",     
      fontWeight: "bold",
    };
    const stylebutton = {
      fontSize:"18px",
      border:"2px solid #e3573c",
      color:"#e3573c",
      borderRadius:"5px",
      padding:"20px 30px"
    };
    return (
    <section  class="container-fluid" id="componentContact"  style={mystyle}> 
    <p id="step4"><b>04.</b> What's Next</p>
    <h2 style={titreContact}>Get IN Touch</h2>
    <p id="description">I'm always looking for the best opportunities and challenges.
    I will try my best <br></br>
    to get back to you as soon as possible!</p>
    <a href="#1" id="stylebuttoncontact" style={stylebutton}>Say hello</a>
    </section>
    )
  }
  }
ReactDOM.render(<Contact />,document.getElementById('contact'));


reportWebVitals();










