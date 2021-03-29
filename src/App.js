import React , { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import './App.css';
import './index.css';

function App() {
  const [content, setContent] = useState("Homepage");
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
      <div className="h-1-10">
        <Header showSearch={showSearch} showCreate={showCreate} showHomepage={showHomepage}/>
      </div>
      <div className="h-9-10">
        <Body content={content} goToSearch={showSearch}/>
      </div>
    </div>
  );
}

export default App;
