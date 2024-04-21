import React from "react";
import "./ArtistCard.css";
const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.img} alt={artist.name} className="artist-image" />
      <div className="artist-info">
        <h3 className="artist-name">{artist.name}</h3>
        <p className="artist-description">{artist.description}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
