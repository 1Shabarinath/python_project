import React from "react";
import "./SongCard.css";

function SongCard({ songData }) {
  const { title, feature_img, album } = songData;

  return (
    <div className="song-card">
      <div className="song-image">
        {feature_img && <img src={feature_img} alt={title} />}
      </div>
      <div className="song-details">
        <h2>{title}</h2>
        <p className="album-title">Album: {album.title}</p>
        {album.artist && <p className="artist">Artist: {album.artist}</p>}
        {album.artist && <p className="artist">Bio: {album.bio}</p>}
      </div>
    </div>
  );
}

export default SongCard;
