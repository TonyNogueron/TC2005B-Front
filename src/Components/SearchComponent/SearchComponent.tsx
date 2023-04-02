import React from "react";
import "./SearchComponent.css";

interface SearchComponentProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (query: string) => void;
}

export default function SearchComponent({
  search,
  setSearch,
  onSearch,
}: SearchComponentProps): JSX.Element {
  
  return (
      <div className="searchContainer">
        <div className="SearchLabelContainer">
          <label htmlFor="searchInput" className="SearchLabel">
            Ingrese nombre del niño:{" "}
          </label>
        </div>
        <div className="SearchContainer">
          <input
            type="text"
            id="searchInput"
            className="searchInput"
            placeholder="Ingrese su búsqueda"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setSearch(e.target.value);
            }}
          />
        </div>

      </div>
  );
}

/*
        <div className="SearchButtonContainer">
          <button className="SearchButton" onClick={() => onSearch(search)}>
            Buscar
          </button>
        </div>

*/