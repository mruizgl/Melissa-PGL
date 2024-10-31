import React, { useState } from "react";
import ReactPlayer from "react-player";


const Practica37: React.FC = () => {

  const [playlist] = useState<string[]>([
    "http://allzic06.ice.infomaniak.ch/allzic06", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Ejemplo de MP3
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Otro MP3
  ]);

  const [currentUrl, setCurrentUrl] = useState<string>(playlist[0]);

  const handlePlay = (url: string) => {
    setCurrentUrl(url);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reproductor de Audio</h2>
      <ReactPlayer
        url={currentUrl}
        controls
        width="400px"
        height="50px"
      />
      <ul style={styles.playlist}>
        {playlist.map((url, index) => (
          <li key={index} style={styles.listItem}>
            <button onClick={() => handlePlay(url)} style={styles.button}>
              Reproducir {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const styles = {
  container: {
    padding: "20px",
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  playlist: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px 0",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};


export default Practica37;
