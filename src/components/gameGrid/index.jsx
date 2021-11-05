import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import PanelComplexity from './panelComplexity'
import { LoosePopup, WinPopup, LearnPopup } from '../popups'
import {
  addChoosenItemAC,
  addOpensItemAC,
  createGameThunk,
  resetChoosenItemsAC,
  setTimeAC,
  toggleShowLearnAC,
} from '../../redux/actions/actions'
import {
  COMPLEXITY, DEFAULT_COLOR, TIME_SHOW_ITEM,
} from '../../enums'
import {
  isGameOver, isGameWin, isRightChoose, getComplexity, isOpenedNowItem,
} from '../../utils'
import styles from './index.module.scss'

let timeout

const GameGrid = () => {
  const location = useLocation()

  const dispatch = useDispatch()

  const {
    time,
    isStartGame,
    countItems,
    colors,
    opensItems,
    choosenItems,
    isShowLearn,
  } = useSelector(state => ({
    time: state?.info.time,
    isStartGame: state?.info.isStartGame,
    countItems: state?.info.countItems,
    colors: state?.info.colors,
    opensItems: state?.info.opensItems,
    choosenItems: state?.info.choosenItems,
    isShowLearn: state?.info.isShowLearn,
  }))

  const complexity = getComplexity(location)

  const createGame = complexity => dispatch(createGameThunk(complexity))
  const addOpensItem = item => dispatch(addOpensItemAC(item))
  const resetChoosenItems = () => dispatch(resetChoosenItemsAC())
  const handlerCLickItem = id => {
    if (!opensItems.includes(id) && choosenItems.length < 2) dispatch(addChoosenItemAC(id))
  }

  useEffect(() => {
    createGame(complexity)
  }, [location.pathname])

  useEffect(() => {
    if (choosenItems.length === 2) {
      if (isRightChoose(choosenItems, colors)) {
        choosenItems.map(item => addOpensItem(item))
        resetChoosenItems()
      } else setTimeout(() => resetChoosenItems(), TIME_SHOW_ITEM)
    }
  }, [choosenItems])

  useEffect(() => {
    if (isStartGame) timeout = setTimeout(() => dispatch(setTimeAC((time - 1))), 1000)
    else clearTimeout(timeout)
  }, [isStartGame, time])

  if (isGameOver(time)) return <LoosePopup />
  if (isGameWin(opensItems, countItems)) return <WinPopup />

  return (
    <div className={styles.game}>
      <PanelComplexity />
      <p className={`${styles.time} ${time < 11 && styles.redTime}`}>
        {`time: ${time}`}
      </p>
      <div className={complexity === COMPLEXITY.HARD ? styles.gameGridHard : styles.gameGridEasy}>
        {colors.map((color, id) => (
          <div
            key={id}
            onClick={isStartGame ? () => handlerCLickItem(id) : null}
            style={{ background: isOpenedNowItem(id, opensItems, choosenItems) ? color : DEFAULT_COLOR }}
            className={styles.gridItem}
          />
        ))}
      </div>
      <progress className={styles.progressbar} value={opensItems.length} max={countItems} />
      {isShowLearn && <LearnPopup toggleShowLearn={() => dispatch(toggleShowLearnAC(false))} />}
    </div>
  )
}

export default GameGrid
