import React,{useState, useEffect} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const Music = () => {
    const [audioLists, setAudioLists] = useState([
        { musicSrc: 'klp.mp3' },
        { musicSrc: 'bins.mp3' },
      ])
    
    return(
        <ReactJkMusicPlayer
        audioLists={audioLists} 
        showMediaSession 
        autoPlay = {false}
        defaultPosition = {{bottom:50, right:50}}
        defaultVolume={0.5}
        spaceBar={true}
        preload={true}
     

        />
    );
        
} 
export default Music;