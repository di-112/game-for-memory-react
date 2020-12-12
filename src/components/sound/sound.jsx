import React, { useMemo } from 'react'
import styles from './sound.module.scss'
import useSound from 'use-sound';
import sound from '../../img/speaker-volume.svg' 
import offSOund from '../../img/sound-off.svg' 
import audioSea from '../../audio/audio_sea.mp3' 
import audioFire from '../../audio/audio_fire.mp3' 
import audioRain from '../../audio/audio_rain.mp3' 
import { connect } from 'react-redux';

const Sound = ({background}) => {
   let audiotrack;
   switch(background){
      case 'sea': audiotrack = audioSea; break
      case 'fire': audiotrack = audioFire; break
      case 'rain': audiotrack = audioRain; break
      default: audiotrack = audioSea; break
   }
   
   const [play, {stop, isPlaying}] = useSound(audiotrack, {interrupt:true});

   useMemo(() => stop(), [audiotrack]);

   return (
      <div className={styles.sound}>       
         {isPlaying? <img onClick={()=>stop()} src={sound} alt=""/>:<img onClick={play} src={offSOund} alt=""/>}
      </div>
   )
}

export default connect((state)=>({background: state.info.background}))(Sound)