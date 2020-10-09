import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Countrylist} from "../CountryList";
import axios from "axios";

type Currencies = {
  name: string;
};
type Languages = {
  name: string;
};
type CountryData = {
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currencies[];
  languages: Languages[];
  borders: string[];
  flag: string;
};

export const Detail = () => {
  const [data, setData] = useState<CountryData>();
  const [loading, setLoading] = useState<boolean>(true);
  const { country } = useParams();

  function getCountryName(code:string){
    const name = Countrylist.find(c => c.code=== code);
    return name?.name;
  }

  useEffect(() => {
    try {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((res) => {
          setData(res.data[0]);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [country]);

  if (data) {
    return (
      <div className="details">
        <div className="backbtn-box">
          <Link to="/">
            <button aria-label="Back button">
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
        {loading ? (
          "Loading"
        ) : (
          <main>
            <img src={data.flag} alt={`Flag of ${data.name}`} />
            <article>
              <section className="countryname">{data.name}</section>
              <section className="description">
                <div>
                  <b>Native Name:</b>
                  {data.nativeName} <br />
                  <b>Population: </b> {data.population}
                  <br />
                  <b>Region: </b>
                  {data.region} <br />
                  <b>Sub Region: </b>
                  {data.subregion} <br />
                  <b>Capital: </b>
                  {data.capital} <br />
                </div>
                <div>
                  <b>Top Level Domain: </b>
                  {data.topLevelDomain.map((domain: string) => `${domain} `)}
                  <br />
                  <b>Currencies: </b>
                  {data.currencies.map((cur: Currencies) => `${cur.name} `)}
                  <br /> <b>Languages </b>
                  {data.languages.map((lan: Languages) => `${lan.name} `)}
                  <br />
                </div>
              </section>
              <section>
                <b>Border Countries:</b>
                {data.borders.length>0 ? data.borders.map((country: string) => 
                  {  const name = getCountryName(country)
                    return <Link to={`/${name}`} key={name}>
                    <button>{name}</button>
                  </Link>
                  }
                ): " None"}
              </section>
            </article>
          </main>
        )}
      </div>
    );
  }
  return <div></div>;
};
