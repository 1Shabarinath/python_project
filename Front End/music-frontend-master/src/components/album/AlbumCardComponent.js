import React from "react";
import "./AlbumCard.css"; // Import CSS file for styling

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.feature_img} alt={album.title} className="album-cover" />
      <div className="album-details">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist.name}</p>
        <p className="album-artist">{album.short_description}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
