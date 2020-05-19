import React from 'react';
import './App.css';

// function sayHi() {
//   alert('hi!');
// }

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__top"></div>
          <div className="header__content">
          <h1>SOPHIE ALPERT</h1>
          <h5>PROGRAMMER</h5>
          </div>
      </div>
      <div className="firstDiv">
        <div className="firstDiv__links">
          <h4>LINKS</h4>
          <div className="firstDiv__links__lines">
            <div className="firstDiv__links__wideLine"></div>
            <div className="firstDiv__links__narrowLine"></div>
          </div>
          <div className="firstDiv__links__linkDiv">
            <img src={require("./images/linkedin.png")} alt="L"></img>
            <a href="https://www.w3schools.com">LINKEDIN/username</a>
          </div>
          <div className="firstDiv__links__linkDiv">
            <img src={require("./images/twitter.png")} alt="T"></img>
            <a href="https://www.w3schools.com">TWITTER/@user-handle</a>
          </div>
          <div className="firstDiv__links__linkDiv">
            <img src={require("./images/github.png")} alt="G"></img>
            <a href="https://www.w3schools.com">GITHUB/username</a>
          </div>
          <div className="firstDiv__links__linkDiv">
            <img src={require("./images/dev.svg")} alt="B"></img>
            <a href="https://www.w3schools.com">BLOG/blog-name</a>
          </div>
          
          
          
        </div>
        <div className="firstDiv__aboutMe">
          <h4>ABOUT ME</h4>
          <div className="firstDiv__aboutMe__lines">
            <div className="firstDiv__aboutMe__wideLine"></div>
            <div className="firstDiv__aboutMe__narrowLine"></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="secondDiv">
        <div className="education">
          <h4>EDUCATION</h4>
          <div className="secondDiv__education__lines">
            <div className="secondDiv__education__wideLine"></div>
            <div className="secondDiv__education__narrowLine"></div>
          </div>
          <p>SCHOOL NAME</p>
          <p>2011 - 2015</p>
          <p>Degree</p>
          <div className="secondDiv__education__degreeLine"></div>
          <p>SCHOOL NAME</p>
          <p>2011 - 2015</p>
          <p>Degree</p>
        </div>
        <div className="personalTech">
          <div className="personalSkills">
            <h4>PERSONAL SKILLS</h4>
            <div className="secondDiv__personalSkills__lines">
              <div className="secondDiv__personalSkills__wideLine"></div>
              <div className="secondDiv__personalSkills__narrowLine"></div>
            </div>
            <div className="personalSkills__pDiv">
              <p className="personalSkills__one">TEAMWORK</p>
              <p className="personalSkills__two">COMMUNICATION</p>
              <p className="personalSkills__three">ORGANIZATION</p>
            </div>
          </div>
          <div className="techSkills">
            <h4>TECHNICAL SKILLS</h4>
            <div className="secondDiv__techSkills__lines">
              <div className="secondDiv__techSkills__wideLine"></div>
              <div className="secondDiv__techSkills__narrowLine"></div>
            </div>
            <div className="techSkills__pDiv">
              <p className="techSkills__one">HTML</p>
              <p className="techSkills__two">CSS/SCSS</p>
              <p className="techSkills__three">JAVASCRIPT</p>
              <p className="techSkills__four">REACT.JS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdDiv">
        <div className="thirdDiv__workExperience">
          <h4>WORK EXPERIECE</h4>
          <div className="thirdDiv__workExperience__lines">
              <div className="thirdDiv__workExperience__wideLine"></div>
              <div className="thirdDiv__workExperience__narrowLine"></div>
          </div>
        </div>
        <div className="thirdDiv__threeBlocks">
          <div className="thirdDiv__threeBlocks__block">
            <div className="thirdDiv__threeBlocks__block__paragraphs">
              <p>JOB POSITION</p>
              <p>Company</p>
              <p>2018 - present</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div className="thirdDiv__threeBlocks__verticalLine"></div>
          <div className="thirdDiv__threeBlocks__block">
            <div className="thirdDiv__threeBlocks__block__paragraphs">
              <p>JOB POSITION</p>
              <p>Company</p>
              <p>2018 - present</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div className="thirdDiv__threeBlocks__verticalLine"></div>
          <div className="thirdDiv__threeBlocks__block">
            <div className="thirdDiv__threeBlocks__block__paragraphs">
              <p>JOB POSITION</p>
              <p>Company</p>
              <p>2018 - present</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboveFooterLine"></div>
      <div className="footer">
        <div className="footer__div">
          <h5>ADDRESS</h5>
          <p>Imaginary St. 52</p>
          <p>Vilnius, Lithuania</p>
        </div>
        <div className="footer__div">
          <h5>CONTACT</h5>
          <a href="https://www.w3schools.com">+37065698892</a>
          <a href="https://www.w3schools.com">cv@gmail.com</a>
          </div>
        <div className="footer__div">
          <h5>SOCIAL</h5>
          <a href="https://www.w3schools.com">Linkedin/username</a>
          <a href="https://www.w3schools.com">Twitter/@user-handle</a>
          </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={sayHi}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sayHi}>Say Hi!</button>
      </header> */}
    </div>
  );
}

export default App;
