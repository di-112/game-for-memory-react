import React from 'react'
import { useSelector } from 'react-redux'
import Background from '../background'
import GameGrid from '../gameGrid'
import PanelStartGame from '../panelStartGame'
import Sound from '../sound'
import styles from './index.module.scss'

const GameWrapper = () => {
  const background = useSelector(state => state?.info.background)

  return (
    <div className={`${styles.wrapper} ${styles[background]}`}>
      <Sound />
      <PanelStartGame />
      <GameGrid />
      <Background />
    </div>
  )
}

export default GameWrapper
