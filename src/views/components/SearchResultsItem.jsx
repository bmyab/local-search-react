import React from "react";
import styles from '/src/assets/styles/SearchResultsItem.module.css'

const SearchResultsItem = ({ datos }) => {
  const { name, username, email, phone } = datos;
  return (
    <div className={styles.listItem}>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default SearchResultsItem;
