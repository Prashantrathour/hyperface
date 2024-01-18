import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const songs = [
    "https://file-examples.com/storage/fe5048eb7365a64ba96daa9/2017/11/file_example_MP3_700KB.mp3",
    "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
    "https://file-examples.com/storage/fe5048eb7365a64ba96daa9/2017/11/file_example_MP3_700KB.mp3",
    "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
   
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrackHandler = (direction) => {
    if (direction === 'next') {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === 'prev') {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    }
  };

  const timeUpdateHandler = (e) => {
 
    if (audioRef.current) {
      const current = e.target.currentTime||1;
      const duration = e.target?.duration||1;
      const percentage = (current / duration) * 100;
      setProgress(percentage);
    }
  };

  const dragHandler = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const playAudio = async () => {
      try {
        setIsLoading(true)
     await audioRef.current.load(); 
     await audioRef.current.loadedmetadata;
      await  audioRef.current.play(); // Play the audio
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error('Error playing audio:', error);
      }
    };

    if (isPlaying) {
      playAudio();
    }
  }, [currentSongIndex]);

  const skip15 = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + 15;
      audioRef.current.currentTime = Math.min(newTime, audioRef.current.duration);
    }
  };

  const back15 = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime - 15;
      audioRef.current.currentTime = Math.max(newTime, 0);
    }
  };

  return (
    <div className="audio-player">
      <div className="song-info">
      
      </div>
     
      <input
        type="range"
        value={progress}
        onChange={dragHandler}
        className="progress-bar"
      />
      <div className="time">
        <p style={{fontSize:"10px" ,color:"white"}}>{audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}</p>
        <p style={{fontSize:"10px" ,color:"white"}}>{audioRef.current&& (!isLoading)? formatTime(audioRef.current.duration) : '0:00'}</p>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong}
      ></audio>

      <div className='btnicon'>
      <span onClick={() => skipTrackHandler('prev')}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame">
<path id="Vector" d="M10.6666 15.1107L24.2973 6.024C24.3977 5.9572 24.5143 5.91887 24.6348 5.91311C24.7552 5.90735 24.875 5.93436 24.9813 5.99128C25.0876 6.0482 25.1765 6.13289 25.2385 6.23633C25.3005 6.33976 25.3333 6.45808 25.3333 6.57867L25.3333 25.4213C25.3333 25.5419 25.3005 25.6602 25.2385 25.7637C25.1765 25.8671 25.0876 25.9518 24.9813 26.0087C24.875 26.0656 24.7552 26.0927 24.6348 26.0869C24.5143 26.0811 24.3977 26.0428 24.2973 25.976L10.6666 16.8893L10.6666 25.3333C10.6666 25.687 10.5262 26.0261 10.2761 26.2761C10.0261 26.5262 9.68693 26.6667 9.33331 26.6667C8.97969 26.6667 8.64055 26.5262 8.3905 26.2761C8.14045 26.0261 7.99998 25.687 7.99998 25.3333L7.99998 6.66667C7.99998 6.31305 8.14045 5.97391 8.3905 5.72386C8.64055 5.47381 8.97969 5.33334 9.33331 5.33334C9.68693 5.33334 10.0261 5.47381 10.2761 5.72386C10.5262 5.97391 10.6666 6.31305 10.6666 6.66667V15.1107ZM22.6666 21.684L22.6666 10.316L14.1413 16L22.6666 21.684Z" fill="white"/>
</g>
        </svg></span>





    <span style={{position:"relative"}} onClick={back15}>

        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M5.28398 24.0893C7.70339 26.1858 10.7986 27.3378 14 27.3333C21.364 27.3333 27.3333 21.364 27.3333 14C27.3333 6.636 21.364 0.666668 14 0.666668C6.63598 0.666668 0.666645 6.636 0.666645 14C0.666645 16.848 1.55998 19.488 3.07998 21.6533L7.33331 14H3.33331C3.33351 11.5416 4.18289 9.15875 5.73775 7.25452C7.29261 5.35029 9.4575 4.04159 11.8662 3.54981C14.2749 3.05803 16.7795 3.41336 18.9564 4.55569C21.1333 5.69802 22.8487 7.55722 23.8126 9.81878C24.7765 12.0803 24.9296 14.6054 24.246 16.9669C23.5624 19.3283 22.0841 21.3811 20.0612 22.7781C18.0383 24.175 15.5949 24.8304 13.1445 24.6332C10.694 24.436 8.38684 23.3984 6.61331 21.696L5.28398 24.0893Z" fill="white"/>
</svg>
<span className='fiv-1'>15</span>
    </span>







<span style={{width:"72px",height:"72px",overflow:"hidden"}} onClick={playPauseHandler}>
          {isPlaying ? 
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame" clip-path="url(#clip0_2_287)">
<path id="Vector" d="M36 66C19.431 66 6 52.569 6 36C6 19.431 19.431 6 36 6C52.569 6 66 19.431 66 36C66 52.569 52.569 66 36 66ZM27 27V45H33V27H27ZM39 27V45H45V27H39Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_287">
<rect width="72" height="72" fill="white"/>
</clipPath>
</defs>
</svg>
:<span className='playbtn'>
  <img
    width={"20px"}
    height={"20px"}
    src="https://www.svgrepo.com/show/164900/play-button-arrowhead.svg"
    alt=""
  />
</span>}
        </span>






<span style={{position:"relative"}} onClick={skip15}>

<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M22.716 24.0893C20.2966 26.1858 17.2014 27.3378 14 27.3333C6.63602 27.3333 0.666687 21.364 0.666687 14C0.666687 6.636 6.63602 0.666668 14 0.666668C21.364 0.666668 27.3334 6.636 27.3334 14C27.3334 16.848 26.44 19.488 24.92 21.6533L20.6667 14H24.6667C24.6665 11.5416 23.8171 9.15875 22.2623 7.25452C20.7074 5.35029 18.5425 4.04159 16.1338 3.54981C13.7251 3.05803 11.2205 3.41336 9.04359 4.55569C6.86672 5.69802 5.15125 7.55722 4.18739 9.81878C3.22352 12.0803 3.07043 14.6054 3.75401 16.9669C4.43759 19.3283 5.91588 21.3811 7.9388 22.7781C9.96171 24.175 12.4051 24.8304 14.8555 24.6332C17.306 24.436 19.6132 23.3984 21.3867 21.696L22.716 24.0893Z" fill="white"/>
</svg>
</span>
<span className='fiv-2'>15</span>
<span onClick={() => skipTrackHandler('next')}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame" clip-path="url(#clip0_2_294)">
<path id="Vector" d="M21.3334 16.8893L7.70269 25.976C7.60229 26.0428 7.48566 26.0811 7.36521 26.0869C7.24476 26.0927 7.125 26.0656 7.01869 26.0087C6.91237 25.9518 6.82349 25.8671 6.76151 25.7637C6.69952 25.6602 6.66675 25.5419 6.66669 25.4213V6.57867C6.66675 6.45808 6.69952 6.33976 6.76151 6.23632C6.82349 6.13288 6.91237 6.0482 7.01869 5.99128C7.125 5.93436 7.24476 5.90734 7.36521 5.9131C7.48566 5.91887 7.60229 5.95719 7.70269 6.024L21.3334 15.1107V6.66667C21.3334 6.31304 21.4738 5.97391 21.7239 5.72386C21.9739 5.47381 22.3131 5.33333 22.6667 5.33333C23.0203 5.33333 23.3594 5.47381 23.6095 5.72386C23.8595 5.97391 24 6.31304 24 6.66667V25.3333C24 25.687 23.8595 26.0261 23.6095 26.2761C23.3594 26.5262 23.0203 26.6667 22.6667 26.6667C22.3131 26.6667 21.9739 26.5262 21.7239 26.2761C21.4738 26.0261 21.3334 25.687 21.3334 25.3333V16.8893ZM9.33335 10.316V21.684L17.8587 16L9.33335 10.316Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_294">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
      </div>
   
{isLoading && (
        <div
          style={{
              position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            zIndex: '999',
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
