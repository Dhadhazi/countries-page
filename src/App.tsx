import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "react-dropdown/style.css";
import "./styles/App.scss";
import { FlagList } from "./components/FlagList";
import { Detail } from "./components/Detail";

function App() {
  const [darkmode, setDarkmode] = useState<boolean>(true);

  return (
    <div className="maindiv">
      <div className="topmenu">
        <div className="positioner">
          <header>Where in the world?</header>
          <div className="mode">
            <i className="far fa-moon"></i> Dark mode
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
