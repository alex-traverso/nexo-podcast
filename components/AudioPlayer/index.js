import React from "react";

const AudioPlayer = ({ src }) => {
  return (
    <audio className="w-full mb-6" controls preload="auto">
      <source src={src} type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
};

export default AudioPlayer;
