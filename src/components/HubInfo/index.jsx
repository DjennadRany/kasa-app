<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import accommodationsData from "../../data/accommodation.json";
import "./HubInfo.scss";

function HubInfo() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(accommodationsData);
  }, []);

  return (
    <div className="hub-info">
      {accommodations.map((accommodation) => (
        <Link
          key={accommodation.id}
          to={`/accommodation/${accommodation.id}`}
          className="hub-block"
          style={{ backgroundImage: `url(${accommodation.cover})` }}
        ><div className="linear">
          <h3>{accommodation.title}</h3>
          <p>{accommodation.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HubInfo;
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import accommodationsData from "../../data/accommodation.json";
import "./HubInfo.scss";

function HubInfo() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(accommodationsData);
  }, []);

  return (
    <div className="hub-info">
      {accommodations.map((accommodation) => (
        <Link
          key={accommodation.id}
          to={`/accommodation/${accommodation.id}`}
          className="hub-block"
          style={{ backgroundImage: `url(${accommodation.cover})` }}
        >
          <h3>{accommodation.title}</h3>
          <p>{accommodation.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default HubInfo;
>>>>>>> cd2e37f32070815140cf13fd8cae1edc3234e864
