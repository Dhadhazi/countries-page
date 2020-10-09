import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
      <LazyLoadImage src={data.flag} className="flag" alt={`Flag of ${data.name}`} />
      <h2 className="countryname">{data.name}</h2>
      <h3 className="description">
        <b>Population:</b> {numberWithCommas(data.population)}
        <br />
        <b>Region:</b> {data.region} <br />
        <b>Capital:</b> {data.capital}
      </h3>
    </article>
  );
};
