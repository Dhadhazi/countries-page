import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "react-dropdown/style.css";
import "./styles/App.scss";

import { FlagList } from "./components/FlagList";
import { Detail } from "./components/Detail";

function App() {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  if (darkmode)
  {
    document.documentElement.style.setProperty('--background', 'hsl(209, 23%, 22%)');
    document.documentElement.style.setProperty('--elem', ' hsl(207, 26%, 17%)');
    document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--input', 'hsl(207, 26%, 17%)');
} 
  
  else {
    document.documentElement.style.setProperty('--background', 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty('--elem', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--text', 'hsl(200, 15%, 8%)');
    document.documentElement.style.setProperty('--input', ' hsl(0, 0%, 52%)'); 
  }

  return (
    <div className="maindiv">
      <div className="topmenu">
        <div className="positioner">
          <header>Where in the world?</header>
          <div className="mode" onClick={()=>setDarkmode((prevState)=>!prevState)}>
            <i className={darkmode ? "fas fa-moon":"far fa-moon"}></i> Dark mode
          </div>
        </div>
      </div>
      <div className="maincontent">
        <Switch>
          <Route path="/:country" component={Detail} />
          <Route path="/" component={FlagList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
