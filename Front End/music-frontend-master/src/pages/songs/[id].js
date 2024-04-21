import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongsByAlbumId } from "../../controller/SongContoller";
import SongCard from "../../components/song/SongCard";
import "./styles.css";
export default function Songs() {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      getSongsByAlbumId(id)
        .then((res) => {
          console.log(res);
          setSongs(res);
        })
        .catch((err) => console.log(err));
    };

    fetch();
  }, []);
  console.log(id);
  return (
    <>
      <div className="section">
        <h2 className="section-title">Featured Albums</h2>
        <div className="cards-container">
          {songs.length > 0 ? (
            songs.map((item) => (
              <section>
                <SongCard key={item.id} songData={item} />
              </section>
            ))
          ) : (
            <div className="not-fount-section">
              <a href="/albums"> Back</a>
              <p className="not-found">No data found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
