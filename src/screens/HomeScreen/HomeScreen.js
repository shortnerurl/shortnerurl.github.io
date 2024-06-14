import React from 'react';
import { STRINGS } from '../../utils/constants';
import Header from './components/Header';
import UrlShortener from './components/UrlShortener';
import Features from './components/Features';

function HomeScreen() {
  return (
    <div className="App">
      <Header title={STRINGS.title} />
      <UrlShortener 
        placeholder={STRINGS.placeholder} 
        button={STRINGS.button} 
        errorEnterUrl={STRINGS.errorEnterUrl}
        errorValidUrl={STRINGS.errorValidUrl}
        description={STRINGS.description} 
      />
      <Features features={STRINGS.features} />
    </div>
  );
}

export default HomeScreen;
