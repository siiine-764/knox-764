import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './scss/style.scss';
import App from './App';
import './script.js';
import reportWebVitals from './reportWebVitals';
import { div } from 'prelude-ls';
import pic from '../src/images/8e6d5f122883155.Y3JvcCwzMTcxLDI0ODEsMCww.jpg';
import logo from './images/Y-764.png';


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
              <a class="link" href="#about"><b>01.</b> About</a>
            </li>
            <li>
              <a class="link" href="#experience"><b>02.</b> Experience</a>
            </li>
            <li>
              <a class="link" href="#work"><b>03.</b> Work</a>
            </li>
            <li>
              <a class="link" href="#contact"><b>04.</b> Contact</a>
            </li>
            <li>
              <a href="#!" class="link">Services</a>
              <ul class="nav-dropdown">
                <div class="langWrap">
                <li>
                  <a href="#lang1" id="lang" language='kazakh'>ҚАЗ</a>
                </li>
                <li>
                  <a href="#lang2" id="lang" language='japanese'>あ</a>
                </li>
                <li>
                  <a href="#lang3" id="lang" language='deutsch'>Deutsch</a>
                </li>
                <li>
                  <a href="#lang4" id="lang" language='english' class="active">EN</a>
                </li>
                </div>
              </ul>
            </li>
            <li><a class="link" id="btn" href="#resume">Resume</a></li>
            <li><a class="link" id="btn" href="#blog">Blog</a></li>
          </ul>
        </nav>
      </div>
    </section>
    
    )
  }
  }

ReactDOM.render(<Navbar />,document.getElementById('navbar'));

//Component the media and email

const CONTENT_DEFINITION = [
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Front end development",
    panel: (
      <>
        <p id="verdienen">Front end development</p>
        <p id="schmerz">Experienced with:</p>
        <p>💪 | HTML/CSS/JavaScript</p>
        <p>🔥  | jQuery/Ajax</p>
        <p>💪 | CASS/SCSS</p>
      </>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Back end development",
    panel: (
      <>
        <p id="verdienen">Back end development</p>
        <p id="schmerz">Experienced with:</p>
        <p>💪 | Node js</p>
        <p>💪 | Laravel</p>
      </>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "JavaScript frameworks libraries",
    panel: (
      <>
        <p id="verdienen">JavaScript frameworks libraries</p>
        <p id="schmerz">Experienced with:</p>
        <p>💪 | React Js</p>
        <p>🏈 | Styed-components</p>
        <p>💪 | Bootstrap/Tailwind/Material-UI</p>
        <p>💪 | Styed-components</p>
        <p>💪 | Kite JS</p>
      </>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Graphic, UI/UX Design",
    panel: (
      <>
        <p id="verdienen">Graphic, UI/UX Design</p>
        <p id="schmerz">Experienced with:</p>
        <p>💪 | Adobe Illustrator</p>
        <p>🏈 | Photoshop</p>
        <p>🏈 | Figma</p>
      </>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Version control",
    panel: (
      <>
        <p id="verdienen">Version control</p>
        <p id="schmerz">Familiar with:</p>
        <p>💪 | Git</p>
      </>
    ),
  },
  {
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: "Another",
    panel: (
      <>
        <p id="verdienen">Another</p>
        <p id="schmerz">Experienced with:</p>
        <p>💪 | ASP.net</p>
        <p>💪 | ADO.net</p>
        <p>💪 | Android</p>


      </>
    ),
  },
  /*{
    uid: Math.floor(100000 + Math.random() * 900000),
    tab: (
      <>
        <p class="tab-title">A More Complete Tab</p>
        <small class="tab-subtitle">With small details</small>
      </>
    ),
    panel: (
      <>
        <p class="tabpanel-title">And if you decide to get creative</p>
        <small class="tabpanel-subtitle">With some CSS</small>
        <p class="tabpanel-text">You can style everything to your liking!</p>
      </>
    ),
  },*/
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
            aria-seleted={isSelected}
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

class Content extends React.Component {
  render() {
    return (
      <div class="content">
      <h2 class="title">Hello World</h2>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi veritatis, dicta nesciunt repellat eius labore ea accusantium? Ex nemo vel dolorem cum neque. Corrupti laudantium repellendus maxime reiciendis, voluptate modi optio sed qui eaque rerum fugiat accusantium, quis sequi eum. Quisquam reiciendis earum voluptatibus, provident ex error debitis dolorem pariatur explicabo quae deserunt aut non sequi facere! Velit sunt incidunt accusantium saepe hic debitis totam, laudantium ab culpa optio dolores nam quo fugiat neque nostrum enim officia quam labore obcaecati?</p>
    <p class="text">sterben komisch kapput umgangssprachlich niederlassungserlaubnis heimlich bilden rechnen ich ahne aufschieben</p>
    </div>
    )
  }
  }

ReactDOM.render(<Content />,document.getElementById('content'));


//React Render HTML
/*const myelement = (
  <table>
    <tr>
      <th>FirstName : </th>
      <th>yassine</th>
    </tr>
    <tr>
      <th>LastName : </th>
      <th>Ayache</th>
    </tr>
  </table>
)
*/
//React JSX
/*const myelement1 = <h1 class="h1">YOOOOOW FUCKING BOY</h1>
ReactDOM.render(myelement1,document.getElementById('root2'));*/

/*function start() {
  return(
    <div>
    Start the FUCKING here
    </div>
  );
  
}
ReactDOM.render(start,document.getElementById('root1'));
ReactDOM.render(myelement,document.getElementById('root1'));*/


//React Components
class Loader extends React.Component {
  render() {
    return (<div>

    <div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1 id="h1">Data to enrich your online business</h1>
          <h1 id="p2">sweet girl</h1>
          <h1 id="p1">
          Anim aute id magna aliqua ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h1>
        </div>
        <div class="col-sm-6">
          <div id="wapper2"></div>
        <img src={pic} alt="pic" id="img"></img>
        <div id="wapper1"></div>
        </div>
      </div>
    </div>

</div>

    

    </div>
    )
  }
  }
ReactDOM.render(<Loader />,document.getElementById('loader'));



/*class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand : "Ford",
      model : "Mustrang",
      color : "red",
      year : 2020
    };
  }
  changercolor = () =>{
    this.setState({color: "blue"});
  }
  render(){
    return(
      <div>
      <h1>My {this.state.brand}</h1>
      <p>It's a {this.state.color} {this.state.model} 
      from {this.state.year}.
      </p>
      <button type="button" onClick={this.changercolor}>
      changer color</button>
      </div>
    );
  }
}
ReactDOM.render(<Car/>, document.getElementById('root'));*/


class MyHeader extends React.Component{
  render(){
    const mystyle = {
      color : "red",
      fontSize : "25px",
      backgroundColor : "black",
      padding : "20px"
    };
    return(
      <div>
      <p class="p">The Caterpillar and Alice looked at each other for some time in silence:
      at last the Caterpillar took the hookah out of its mouth, and addressed
      her in a languid, sleepy voice.</p>
      <h1 style={mystyle}>Hello Styled!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('rootheader'))

reportWebVitals();










