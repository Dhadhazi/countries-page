import React from "react";

type Props = {
  data: FlagData;
};

export const FlagCard = ({ data }: Props) => {
  function numberWithCommas(x: string) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  return (
    <article className="card">
      <img src={data.flag} className="flag" alt={`Flag of ${data.name}`} />
      <section className="countryname">{data.name}</section>
      <section className="description">
        <b>Population:</b> {numberWithCommas(data.population)}
        <br />
        <b>Region:</b> {data.region} <br />
        <b>Capital:</b> {data.capital}
      </section>
    </article>
  );
};
