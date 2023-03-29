import React, { useState, useCallback } from "react";
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
  const debounce = useCallback(
    <F extends (...args: any[]) => void>(
      func: F,
      delay: number
    ): ((...args: Parameters<F>) => void) => {
      let timer: NodeJS.Timeout;
      return (...args: Parameters<F>): void => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(...args);
        }, delay);
      };
    },
    []
  );

  const debouncedSearch = useCallback(
    debounce(() => {
      onSearch(search);
    }, 500),
    [debounce, onSearch, search]
  );

  return (
    <div>
      <div className="searchContainer">
        <div className="SearchLabelContainer">
          <label htmlFor="searchInput" className="SearchLabel">
            Ingrese nombre del niño:{" "}
          </label>
        </div>
        <div className="SearchLabelContainer">
          <input
            type="text"
            id="searchInput"
            className="searchInput"
            placeholder="Ingrese su búsqueda"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setSearch(e.target.value);
              debouncedSearch();
            }}
          />
        </div>
        <div className="SearchButtonContainer">
          <button className="SearchButton" onClick={() => onSearch(search)}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
