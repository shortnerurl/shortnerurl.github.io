import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CreateShort.module.css';

function UrlActions({ buttonClicks, buttonShortenAnother }) {
  const navigate = useNavigate();


  const onPresshortAnother = () => {
    navigate('/'); /// Navigate to HomeScreen
  }

  return (
    <div className={styles.urlActions}>
      <button>{buttonClicks}</button>
      <button onClick={onPresshortAnother}
      style={{
        marginLeft: "1%"
      }}
      >{buttonShortenAnother}</button>
    </div>
  );
}

export default React.memo(UrlActions);
