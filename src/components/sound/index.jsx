import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import useSound from 'use-sound'
import styles from './index.module.scss'
import sound from '../../img/speaker-volume.svg'
import offSound from '../../img/sound-off.svg'
import audioSea from '../../audio/audio_sea.mp3'
import audioFire from '../../audio/audio_fire.mp3'
import audioRain from '../../audio/audio_rain.mp3'
import { BACKGROUND_TYPES } from '../../enums'

const Sound = () => {
  const background = useSelector(state => state?.info.background)

  let currentTrack

  switch (background) {
    case BACKGROUND_TYPES.SEA: currentTrack = audioSea; break
    case BACKGROUND_TYPES.FIRE: currentTrack = audioFire; break
    case BACKGROUND_TYPES.RAIN: currentTrack = audioRain; break
    default: currentTrack = audioSea; break
  }

  const [play, { stop, isPlaying }] = useSound(currentTrack, { interrupt: true })

  useMemo(() => stop(), [currentTrack])

  return (
    <div className={styles.sound}>
      <img onClick={isPlaying ? () => stop() : () => play()} src={isPlaying ? sound : offSound} alt="" />
    </div>
  )
}

export default Sound
