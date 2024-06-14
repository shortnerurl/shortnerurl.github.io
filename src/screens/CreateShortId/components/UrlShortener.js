import React, { useState } from 'react';
import styles from '../CreateShort.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { copyToClipboard } from '../../../utils/utils';

function UrlShortener({ shortenedUrlTitle, placeholder, buttonCopyUrl, longUrl, description }) {
  const [searchParams] = useSearchParams();

  const shortId = searchParams.get('shortId');
  const url = searchParams.get('url');
  const domain = window.location.origin;

  const shortUrl = `${domain}/${shortId}`;

  const copyShortUrl = () => {
    copyToClipboard(shortUrl)
  }

  return (
    <div className={styles.urlShortener}>
      <h2>{shortenedUrlTitle}</h2>
      <p>{description}</p>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={shortUrl}
          readOnly
        />
        <button
        onClick={copyShortUrl}
        >{buttonCopyUrl}</button>
      </div>
      <p>Long URL: <a href={url} target="_blank" rel="noopener noreferrer" style={{color:"#a7b8eb"}}>{url}</a></p>
    </div>
  );
}

export default UrlShortener;
