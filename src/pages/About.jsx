// About.jsx
import React from 'react';
import Accordion from "../components/Accordion";
import Banner from '../components/Banner';

function About() {
  return (
    <div>
            <Banner text="A Propos" /><br></br>
      <div className="APropos">
        <Accordion title="Fiabilité" items={["Hello"]} />
        <Accordion title="Respect" items={["Hello"]} />
        <Accordion title="Service" items={["Hello"]} />
        <Accordion title="Sécurité" items={["Hello"]} />
      </div>
    </div>
  );
}

export default About;
