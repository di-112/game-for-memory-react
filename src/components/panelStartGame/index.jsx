import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { createGameThunk, toggleStartGameAC } from '../../redux/actions/actions'
import styles from './index.module.scss'
import { getComplexity } from '../../utils'

const PanelStartGame = () => {
  const location = useLocation()

  const dispatch = useDispatch()

  const isStartGame = useSelector(state => state?.info.isStartGame)

  const complexity = getComplexity(location)

  return (
    <div className={styles.panelStartGame}>
      <button
        onClick={() => dispatch(toggleStartGameAC(true))}
        className={`${styles.startGame} ${isStartGame && styles.active}`}
      >
        Start
      </button>
      <button onClick={() => dispatch(createGameThunk(complexity))}>Reset</button>
    </div>
  )
}

export default PanelStartGame
