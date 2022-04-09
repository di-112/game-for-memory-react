import React, { FC } from 'react'
import cn from 'classnames'
import Background from '../background'
import GameGrid from '../gameGrid'
import PanelStartGame from '../panelStartGame'
import Sound from '../sound'
import styles from './style.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const GameWrapper: FC = () => {
  const background = useTypedSelector(state => state.background)

  return (
    <div className={cn(styles.wrapper, styles[background])}>
      <Sound />
      <PanelStartGame />
      <GameGrid />
      <Background />
    </div>
  )
}

export default GameWrapper
