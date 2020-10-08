import React, { useState } from "react";
import Dropdown from "react-dropdown";

export const RegionSelect = () => {
  const [region, setRegion] = useState<string>();
  const options = [
    { value: "Africa", label: "Africa", className: "dropdown-option" },
    { value: "Americas", label: "America", className: "dropdown-option" },
    { value: "Asia", label: "Asia", className: "dropdown-option" },
    { value: "Europe", label: "Europe", className: "dropdown-option" },
    { value: "Oceania", label: "Oceania", className: "dropdown-option" },
  ];
  return (
    <div className="dropdown-box">
      <Dropdown
        controlClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        menuClassName="dropdown-list"
        options={options}
        onChange={(e) => {
          setRegion(e.value);
        }}
        value="Filter by Region"
      />
    </div>
  );
};
