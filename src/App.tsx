import React from "react";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <div id="topmenu">
        <header>Where in the world?</header>
        <div id="Dark Mode">Dark mode</div>
      </div>
      <div id="maincontent">
        <nav id="navigation">
          <input placeholder="Search for a country..." />
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
