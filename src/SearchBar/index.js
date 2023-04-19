import React from "react";
import "./SearchBar.css";

function SearchBar({ name }) {
  return (
    <div className="SearchBar">
      <button className="SearchBar-Button">
        <span className="icon">🔍</span>{" "}
      </button>

      <input placeholder="Buscar..." className="ProductSearch"></input>
    </div>
  );
}

export { SearchBar };
