import { useEffect, useState } from "react";
import "./Home.css";
import { getAlbums, getArtists } from "../../controller/homepageController";
import ArtistCard from "../../components/ArtistCard";
import AlbumCard from "../../components/album/AlbumCardComponent";
function Home() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbum] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      getArtists()
        .then((res) => {
          setArtists(res);
        })
        .catch((err) => console.log(err));
      getAlbums()
        .then((res) => {
          setAlbum(res);
        })
        .catch((err) => console.log(err));
    };

    fetch();
  }, []);

  return (
    <div className="App">
      <div className="banner">
        <img src="/images/banner.jpg" width="100%" />
        <p>
          <span>APRIL 13, 2024</span>
        </p>
        <h2>Discover Endless Possibilities </h2>
      </div>
      <div className="artists-container">
        <h2 className="section-title">List of Artists</h2>
        <div className="artist-cards-container">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Featured Albums</h2>
        <div className="cards-container">
          {albums.length > 0 &&
            albums.map((album) => <AlbumCard key={album.id} album={album} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
