import React from "react";
import "./SearchBar.css";

function SearchBar({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="SearchBar">
      <button className="SearchBar-Button">
        <span className="icon">🔍</span>{" "}
      </button>

      <input placeholder="Buscar..." className="ProductSearch" value={searchValue}
      onChange={onSearchValueChange}></input>
    </div>
  );
}

export { SearchBar };
