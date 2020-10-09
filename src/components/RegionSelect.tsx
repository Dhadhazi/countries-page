import React from "react";
import Dropdown from "react-dropdown";

type Props = {
  setRegion:Function
}

export const RegionSelect = ({setRegion}:Props) => {
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
