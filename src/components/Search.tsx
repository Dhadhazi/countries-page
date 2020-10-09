import React from "react";

type Props = {
  search: string;
  setSearch: Function;
}

export const Search = ({search, setSearch}:Props) => {

  return (
    <div className="searchbox">
      <i className="fas fa-search"></i>
      <input
        placeholder="Search for a country..."
        name="search"
        aria-label="Search bar"
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};
