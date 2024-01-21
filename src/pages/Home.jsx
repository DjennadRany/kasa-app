// Home.js
import React from 'react';
import Banner from '../components/Banner';
import HubInfo from '../components/HubInfo'; // Ajustez le chemin d'importation

function Home() {
  return (
    <div>
      <Banner text="Bienvenue sur notre site" />
      <HubInfo />
      {/* Ajoutez le contenu de votre page d'accueil ici */}
    </div>
  );
}

export default Home;
