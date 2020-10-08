import React from "react";

export const FlagCard = () => {
  return (
    <article className="card">
      <img
        src="https://restcountries.eu/data/afg.svg"
        className="flag"
        alt="Flag of Afghanistan"
      />
      <section className="countryname">Afghanistan</section>
      <section className="description">
        <b>Population:</b> 84,5454,545 <br />
        <b>Region:</b> Asia <br />
        <b>Capital:</b> Kabul
      </section>
    </article>
  );
};
