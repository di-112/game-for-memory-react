import React, { FC } from 'react'
import classnames from 'classnames/bind'
import styles from './style.scss'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const cn = classnames.bind(styles)

const PanelStartGame: FC = () => {
  const { toggleStartGame, createGame } = useAction()

  const { isStartGame, complexityGame: complexity } = useTypedSelector(state => state)

  const start = () => toggleStartGame(true)

  const reset = () => createGame(complexity)

  return (
    <div className={styles.panelStartGame}>
      <button
        onClick={start}
        className={cn('startGame', { active: isStartGame })}
      >
        Start
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default PanelStartGame
