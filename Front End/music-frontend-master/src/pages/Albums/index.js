import React, { useEffect, useState } from "react";
import AlbumCard from "../../components/album/AlbumCardComponent";
import { getAlbums } from "../../controller/homepageController";
import "./style.css";
export default function Album() {
  const [albums, setAlbum] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      getAlbums()
        .then((res) => {
          setAlbum(res);
        })
        .catch((err) => console.log(err));
    };

    fetch();
  }, []);
  return (
    <>
      <div className="section">
        <h2 className="section-title">Featured Albums</h2>
        <div className="cards-container">
          {albums.length > 0 &&
            albums.map((album) => (
              <a href={`/songs/${album.id}`}>
                <AlbumCard key={album.id} album={album} />
              </a>
            ))}
        </div>
      </div>
    </>
  );
}
