import { useState } from 'react'
import styles from './assets/styles/App.module.css'
import Search from './views/Search'

function App() {

  return (
    <div className="container">
      <h1 className={styles.title}>Proyecto || Buscador Local</h1>

      <Search />
    </div>
  )
}

export default App