import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PanelComplexity from './panelComplexity'
import { LearnPopup, LoosePopup, WinPopup } from '../popups'
import { isGameOver, isGameWin, updateGameGrid } from '../../utils'
import styles from './style.scss'
import GameItems from './gameItems'
import ProgressBar from '../progressBar'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Timer from './timer'

const GameGrid = () => {
  const {
    setTime,
    createGame,
    addOpensItem,
    addChosenItem,
    resetChosenItems,
  } = useAction()

  const {
    time,
    pictures,
    opensItems,
    countItems,
    chosenItems,
    isShowLearn,
    isStartGame,
    complexityGame: complexity,
  } = useTypedSelector(state => state)

  useEffect(() => {
    createGame(complexity)
  }, [complexity])

  useEffect(() => {
    updateGameGrid({
      pictures,
      chosenItems,
      addOpensItem,
      resetChosenItems,
    })
  }, [chosenItems])

  const handlerClickItem = id => {
    if (!opensItems.includes(id) && chosenItems.length < 2) addChosenItem(id)
  }

  return (
    <div className={styles.game}>
      <AnimatePresence>
        {isGameOver(time) && <LoosePopup />}
        {isGameWin(opensItems, countItems) && <WinPopup />}
        {isShowLearn && <LearnPopup />}
      </AnimatePresence>
      <PanelComplexity />
      <Timer
        time={time}
        setTime={setTime}
        isStartGame={isStartGame}
      />
      <GameItems
        pictures={pictures}
        opensItems={opensItems}
        complexity={complexity}
        isStartGame={isStartGame}
        isShowLearn={isShowLearn}
        chosenItems={chosenItems}
        handlerClickItem={handlerClickItem}
      />
      <ProgressBar />
    </div>
  )
}

export default GameGrid
