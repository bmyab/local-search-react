import React from 'react'
import SearchResultsItem from './SearchResultsItem'
import styles from '/src/assets/styles/SearchResults.module.css'

const SearchResults = ({resultado , isSearching}) => {

  // console.log(isSearching)
  return (
    <div className={styles.list}>
      {
        !resultado.length && isSearching && <p>No existen resultados</p>
      }
      {
        resultado.map( item =>(
         <SearchResultsItem key={item.id} datos={item}/>
        ))
      }
    </div>
  )
}

export default SearchResults
