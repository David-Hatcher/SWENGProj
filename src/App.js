import React , { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Particles from 'react-particles-js';
import './App.css';
import './index.css';

function App() {
  const [content, setContent] = useState("Homepage");
  // const partParams = require('./data/particlesjs-config.json');
  const partParams = require('./data/parts.json');
  const showSearch = () => {
    setContent("Search");
  }
  const showCreate = () => {
    setContent("Create");
  }
  const showHomepage = () => {
    setContent("Homepage");
  }
  return (
    <div className="App h-screen">
      <Particles
        style={{ position: "absolute",zIndex:0}}
        height="100%"
        width="100%"
        params={partParams}
      />
      <div className="h-1-10" style={{zIndex:9999999,position:"relative"}}>
        <Header showSearch={showSearch} showCreate={showCreate} showHomepage={showHomepage}/>
      </div>
      <div className="h-9-10" style={{zIndex:999999,position:"relative"}}>
        <Body content={content} goToSearch={showSearch}/>
      </div>

    </div>
  );
}

export default App;
