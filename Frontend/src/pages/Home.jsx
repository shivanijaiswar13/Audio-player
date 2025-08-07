// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const songs = [
  {
    id: 1,
    title: "Ophelia",
    album: "Cleopatra",
    year: "2016",
    artist: "The Lumineers",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    title: "Adventure of a Lifetime",
    album: "A Head Full of Dreams",
    year: "2015",
    artist: "Coldplay",
    image: "https://via.placeholder.com/80",
  },
];

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>My Music</h1>
        <span className="add-button">＋</span>
      </header>

      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <img src={song.image} alt={song.title} className="cover-img" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.album} · {song.year}</p>
              <p>{song.artist}</p>
            </div>
            <button className="play-btn">▶</button>
          </div>
        ))}
      </div>

      <footer className="bottom-nav">
        <div className="nav-item active">
          <span>🏠</span>
          <p>Home</p>
        </div>
        <div className="nav-item">
          <span>📤</span>
          <p>Upload</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
