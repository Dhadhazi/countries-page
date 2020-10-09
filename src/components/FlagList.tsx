import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RegionSelect } from "./RegionSelect";
import { Search } from "./Search";
import { FlagCard } from "./FlagCard";

export const FlagList = () => {
  const [flagList, setFlagList] = useState<[FlagData]>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag"
      )
      .then((res) => setFlagList(res.data));
  }, []);
  return (
    <div>
      <nav className="navigation">
        <Search setSearch={setSearch} search={search}/>
        <RegionSelect />
      </nav>
      <main className="flaglist">
        {flagList
          ? flagList.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase())).map((data: FlagData, i: number) => (
              <Link to={`/${data.name}`} key={`flag-${i}`}>
                <FlagCard data={data} />
              </Link>
            ))
          : "Loading"}
      </main>
    </div>
  );
};
