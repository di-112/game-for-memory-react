import React, { FC } from 'react'
import cn from 'classnames'
import Background from '../Background'
import GameGrid from '../GameGrid'
import PanelStartGame from '../PanelStartGame'
import Sound from '../Sound'
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
