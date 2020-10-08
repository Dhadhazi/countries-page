import React, { useState } from "react";
import Dropdown from "react-dropdown";

export const RegionSelect = () => {
  const [region, setRegion] = useState<string>();
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  return (
    <div className="dropdown-box">
      <Dropdown
        controlClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        options={options}
        onChange={(e) => {
          setRegion(e.value);
        }}
        value="Filter by Region"
      />
    </div>
  );
};
