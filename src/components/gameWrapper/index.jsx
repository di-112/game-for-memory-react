import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Background from '../background'
import GameGrid from '../gameGrid'
import PanelStartGame from '../panelStartGame'
import Sound from '../sound'
import styles from './index.module.scss'
import { COMPLEXITY } from '../../enums'

const GameWrapper = () => {
  const navigate = useNavigate()
  useEffect(() => { navigate(`/${COMPLEXITY.EASY}`) }, [])

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
