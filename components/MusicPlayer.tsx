import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPositionX = e.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newProgress = (clickPositionX / progressBarWidth) * 100;

    if (audioRef.current) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        if (audioRef.current) {
          const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        const newProgress = (currentTime / duration) * 100;
        setProgress(newProgress);
        }
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", () => {});
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 opacity-90 absolute left-4 bottom-4">
      <audio src={src} preload="auto" ref={audioRef}></audio>
      <button
        aria-label="Play/Pause"
        className="bg-white hover:opacity-50 shadow-lg rounded-full p-2 w-10 h-10 focus:outline-none transition-all duration-200 ease-linear"
        type="button"
        onClick={togglePlay}
      >
        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>

      <div
        className="relative w-full h-2 mt-4 bg-gray-300 cursor-pointer"
        onClick={handleProgressChange}
      >
        <div className="absolute h-2 bg-blue-500" style={{ width: `${progress}%` }}></div>
        <div className="absolute h-6 w-6 bg-blue-500 rounded-full" style={{ left: `${progress - 3}%` }}></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
