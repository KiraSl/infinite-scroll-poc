import React from 'react';

const Section = (props) => {
  return (
    <section style={{ backgroundColor: props.color }} >
      <h1>{props.index} section</h1>
    </section>
  );
}

export { Section };
