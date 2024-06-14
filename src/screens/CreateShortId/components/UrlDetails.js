import React from 'react';
import styles from '../CreateShort.module.css';

function UrlDetails({ note }) {
  return (
    <div className={styles.urlDetails}>
      <p>{note}</p>
    </div>
  );
}

export default UrlDetails;
