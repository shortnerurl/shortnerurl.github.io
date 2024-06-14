import React from 'react';

function Features({ features }) {
  return (
    <section className="features">
      {Object.keys(features).map((key) => (
        <div className="feature" key={key}>
          <h3>{features[key].title}</h3>
          <p>{features[key].description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
