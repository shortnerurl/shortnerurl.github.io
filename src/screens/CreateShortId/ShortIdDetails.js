import React from 'react';
import styles from './CreateShort.module.css';
import { STRINGS } from './constants';
import UrlShortener from './components/UrlShortener';
import UrlDetails from './components/UrlDetails';
import UrlActions from './components/UrlActions';
import Header from '../HomeScreen/components/Header';

function ShortIdDetails() {

  return (
    <div className={styles.App}>
      <Header title={STRINGS.title} />
      <UrlShortener 
        shortenedUrlTitle={STRINGS.shortenedUrlTitle}
        placeholder={STRINGS.placeholder} 
        buttonCopyUrl={STRINGS.buttonCopyUrl} 
        longUrl={STRINGS.longUrl} 
        description={STRINGS.description}
      />
      <UrlDetails 
        note={STRINGS.note} 
      />
      <UrlActions 
        buttonClicks={STRINGS.buttonClicks} 
        buttonShortenAnother={STRINGS.buttonShortenAnother} 
      />
    </div>
  );
}

export default ShortIdDetails;
