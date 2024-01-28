import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodationsData from "../data/accommodation.json";
import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Accordion from "../components/Accordion";

import "../styles/tamplets/AccommodationDetails.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedAccommodation = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  useEffect(() => {
    // Vérifiez si selectedAccommodation est undefined
    if (selectedAccommodation === undefined) {
      if (!selectedAccommodation) {
        navigate("/error");
    }
      }
      
  }, [id, selectedAccommodation, navigate]);

  if (!selectedAccommodation) {
    // Retournez quelque chose de différent si selectedAccommodation est undefined
    return <div>Loading...</div>;
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    description,
    equipments,
    rating,
  } = selectedAccommodation;

  const parsedRating = parseInt(rating);

  return (
    <div className="contenaire">
        <Carousel images={pictures} />
        <div className="souContAB">
          <div className="souContA">
            <h2>{title}</h2>
            <p>{location}</p>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="souContB">
            <div className="host-info">
              <h2>{host.name}</h2>
              <div className="host-picture">
                <img src={host.picture} alt={host.name}></img>
              </div>
            </div>
            <div className="stars">
              <StarRating ratingValue={parsedRating} />
            </div>
          </div>
          <div className="description">
            <Accordion title="Description" items={[description]}></Accordion>
          </div>
          <div className="equipement">
            <Accordion title="Equipement" items={equipments} />
          </div>
        </div>
        <div></div>
      </div>
    );
  }


export default AccommodationDetails;
