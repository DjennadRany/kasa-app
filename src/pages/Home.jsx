// Home.js
import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import HubInfo from '../components/HubInfo';
import accommodationsData from '../data/accommodation.json';

function Home() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(accommodationsData);
  }, []);

  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <HubInfo accommodations={accommodations} />
    </div>
  );
}

export default Home;
