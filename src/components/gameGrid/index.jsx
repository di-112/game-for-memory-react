import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import PanelComplexity from './panelComplexity'
import {
  addChoosenItemAC,
  addOpensItemAC,
  createGameThunk,
  resetChoosenItemsAC,
  setTimeAC,
  toggleShowLearnAC,
} from '../../redux/actions/actions'
import { LoosePopup, WinPopup, LearnPopup } from '../popups'
import { COMPLEXITY } from '../../enums'
import styles from './index.module.scss'

let timeout

const GameGrid = () => {
  const location = useLocation()

  const complexity = location.pathname.split('').slice(1).join('')

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

  const dispatch = useDispatch()
  const createGame = complexity => dispatch(createGameThunk(complexity))
  const addOpensItem = item => dispatch(addOpensItemAC(item))
  const resetChoosenItems = () => dispatch(resetChoosenItemsAC())

  useEffect(() => {
    createGame(complexity)
  }, [location.pathname])

  useEffect(() => {
    if (choosenItems.length === 2) {
      if (colors[choosenItems[0]] === colors[choosenItems[1]] && choosenItems[0] !== choosenItems[1]) {
        addOpensItem(choosenItems[0])
        addOpensItem(choosenItems[1])
        resetChoosenItems()
      } else setTimeout(() => resetChoosenItems(), 500)
    }
  }, [choosenItems])

  useEffect(() => {
    if (isStartGame) {
      timeout = setTimeout(() => {
        dispatch(setTimeAC((time - 1)))
      }, 1000)
    } else clearTimeout(timeout)
  }, [isStartGame, time])

  if (time === 0) return <LoosePopup />
  if (opensItems.length === countItems) return <WinPopup />

  const checkAndAddItem = id => {
    if (!opensItems.includes(id) && choosenItems.length < 2) dispatch(addChoosenItemAC(id))
  }

  return (
    <div className={styles.game}>
      <PanelComplexity />
      <p className={`${styles.time} ${time < 11 && styles.redTime}`}>
        {' '}
        time:
        {time}
      </p>
      <div className={complexity === COMPLEXITY.HARD ? styles.gameGridHard : styles.gameGridEasy}>
        {colors.map((color, id) => (
          <div
            key={id}
            onClick={isStartGame ? () => checkAndAddItem(id) : null}
            style={{ background: opensItems.includes(id) || choosenItems.includes(id) ? color : 'black' }}
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
