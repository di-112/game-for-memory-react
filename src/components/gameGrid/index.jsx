import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import PanelComplexity from './panelComplexity'
import { LearnPopup, LoosePopup, WinPopup } from '../popups'
import {
  addChoosenItemAC,
  addOpensItemAC,
  createGameThunk,
  resetChoosenItemsAC,
  setTimeAC,
  toggleShowLearnAC,
} from '../../redux/actions/actions'
import { COMPLEXITY, TIME_SHOW_ITEM } from '../../enums'
import {
  getComplexity, isGameOver, isGameWin, isRightChoose,
} from '../../utils'
import styles from './index.module.scss'
import GameItems from './gameItems'
import ProgressBar from '../progressBar'

let timeout

const GameGrid = () => {
  const location = useLocation()

  const dispatch = useDispatch()

  const {
    time,
    isStartGame,
    countItems,
    pictures,
    opensItems,
    chosenItems,
    isShowLearn,
  } = useSelector(state => state?.info)

  const complexity = getComplexity(location)

  const createGame = complexity => dispatch(createGameThunk(complexity))
  const addOpensItem = item => dispatch(addOpensItemAC(item))
  const resetChoosenItems = () => dispatch(resetChoosenItemsAC())
  const handlerCLickItem = id => {
    if (!opensItems.includes(id) && chosenItems.length < 2) dispatch(addChoosenItemAC(id))
  }

  useEffect(() => {
    createGame(complexity)
  }, [location.pathname])

  useEffect(() => {
    if (chosenItems.length === 2) {
      if (isRightChoose(chosenItems, pictures)) {
        chosenItems.map(item => addOpensItem(item))
        resetChoosenItems()
      } else setTimeout(() => resetChoosenItems(), TIME_SHOW_ITEM)
    }
  }, [chosenItems])

  const control = useAnimation()

  useEffect(async () => {
    if (isStartGame) {
      if (time < 11) {
        await control.start({ scale: 2, transition: { duration: 0.25 } })
        await control.start({ scale: 1, transition: { duration: 0.25 } })
      }
      if (time > 0) {
        timeout = setTimeout(() => dispatch(setTimeAC((time - 1))), 1000)
      }
      return
    }
    clearTimeout(timeout)
  }, [isStartGame, time])

  return (
    <div className={styles.game}>
      <AnimatePresence>
        {isGameOver(time) && <LoosePopup />}
        {isGameWin(opensItems, countItems) && <WinPopup />}
        {isShowLearn && <LearnPopup toggleShowLearn={() => dispatch(toggleShowLearnAC(false))} />}
      </AnimatePresence>
      <PanelComplexity />
      <p className={`${styles.time} ${time < 11 && styles.redTime}`}>
        time:
        {' '}
        <motion.span animate={control}>{time}</motion.span>
      </p>
      <motion.div
        className={complexity === COMPLEXITY.HARD ? styles.gameGridHard : styles.gameGridEasy}
      >
        <GameItems {...{
          pictures, isStartGame, handlerCLickItem, opensItems, chosenItems, isShowLearn,
        }}
        />
      </motion.div>
      <ProgressBar />
    </div>
  )
}

export default GameGrid
