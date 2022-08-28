import React, { FC, useEffect, useMemo } from 'react'
import useSound from 'use-sound'
import styles from './style.scss'
import sound from '../../img/speaker-volume.svg'
import offSound from '../../img/sound-off.svg'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getTrack } from '../../utils'

const Sound: FC = () => {
  const background = useTypedSelector(state => state.background)

  const soundtrack = useMemo(() => getTrack(background), [background])

  const [play, { stop, isPlaying }] = useSound(soundtrack, { interrupt: true })

  useEffect(() => stop(), [soundtrack])

  return (
    <div className={styles.sound}>
      <img
        alt="sound"
        onClick={() => (isPlaying ? stop() : play())}
        src={isPlaying ? sound : offSound}
      />
    </div>
  )
}

export default React.memo(Sound)
