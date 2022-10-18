import React, { useState } from "react";
import styles from "/src/assets/styles/SearchBox.module.css";

const SearchBox = ({ onSearch, onClose, isSearching }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClose = () => {
    setSearchText("");
    onClose();
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.formulario}>
      <h2 className={styles.subtitle}>Buscador de Personal</h2>
      <div className={styles.content}>
        <label className={styles.input}>
          <input type="text" value={searchText} onChange={handleChange} />
        </label>
        <button
          className={styles.buscar}
          onClick={() => onSearch(searchText)}
          disabled={!searchText.length}
        >
          Buscar
        </button>

        {isSearching && (
          <button
            className={styles.cerrar}
            onClick={handleSearchClose}
            
          >
            cerrar
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
