import React from "react";
import "react-dropdown/style.css";
import "./styles/App.scss";

import { RegionSelect } from "./components/RegionSelect";
import { Search } from "./components/Search";
import { FlagCard } from "./components/FlagCard";

function App() {
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
        <nav className="navigation">
          <Search />
          <RegionSelect />
        </nav>
        <main>
          <FlagCard />
        </main>
      </div>
    </div>
  );
}

export default App;
