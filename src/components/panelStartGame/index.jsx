import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createGameThunk, toggleStartGameAC } from '../../redux/actions/actions'
import styles from './index.module.scss'

const PanelStartGame = () => {
  const dispatch = useDispatch()

  const { isStartGame, complexityGame: complexity } = useSelector(state => state?.info)

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
