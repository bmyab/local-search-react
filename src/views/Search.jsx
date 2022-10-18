import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import "../assets/styles/Search.css";
import datos from "../data/user.json";
import SearchResults from "./components/SearchResults";

const Search = () => {
  const [isAtop, setIsAtop] = useState(false);
  const [results, setResults] = useState([]);

  const handleClose = () => {
    setIsAtop(false);
    setResults([])
  }

  const handleSearchClick = (texto) => {
    setIsAtop(true);
    // Validacion del arreglo
    // console.log(datos)
    if(datos?.length){
      // VALIDAR BUSQUEDAS MISMOS TIPO DE PARAMETROS
      const textoMinuscula =  texto.toLowerCase()
      // Filtrado de datos a traves de filter y includes
      const datoFiltrado = datos.filter( dato =>(
        dato.name.toLowerCase().includes(textoMinuscula) ||
        dato.email.toLowerCase().includes(textoMinuscula) ||
        dato.phone.toLowerCase().includes(textoMinuscula) ||
        dato.username.toLowerCase().includes(textoMinuscula)
      ));
      // Llenamos el arreglo con la busqueda
      setResults(datoFiltrado);
    } 
  };


  return (
    <div className={`search ${isAtop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleClose}  isSearching = {isAtop}/>
      <SearchResults resultado = { results } isSearching={ isAtop }/>
    </div>
  );
};

export default Search;
