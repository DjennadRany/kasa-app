// HubInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HubInfo.scss';

function HubInfo({ accommodations }) {
  return (
    <div className="hub-info">
      {accommodations.map((accommodation) => (
        <Link
          key={accommodation.id}
          to={`/accommodation/${accommodation.id}`}
          className="hub-block"
          style={{ backgroundImage: `url(${accommodation.cover})` }}
        >
          <div className="linear">
            <h3>{accommodation.title}</h3>
            <p>{accommodation.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HubInfo;
