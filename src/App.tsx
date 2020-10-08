import React from "react";
import "./styles/App.scss";

function App() {
  return (
    <div className="maindiv">
      <div className="topmenu">
        <div className="positioner">
          <header>Where in the world?</header>
          <div className="mode">Dark mode</div>
        </div>
      </div>
      <div className="maincontent">
        <nav className="navigation">
          <input placeholder="Search for a country..." />
          <select className="regionselector" name="regions">
            <option value="volvo">Africa</option>
            <option value="saab">America</option>
            <option value="fiat">Asia</option>
            <option value="audi">Europe</option>
            <option value="audi">Oceania</option>
          </select>
        </nav>
        <main>
          <article className="card">
            <section className="flag">
              <img src="https://restcountries.eu/data/afg.svg" />
            </section>
            <section className="description">
              Population: 84,5454,545 <br />
              Region: Asia <br />
              Capital: Kabul
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
