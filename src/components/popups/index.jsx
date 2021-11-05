import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createGameThunk, toggleLooseAC, toggleShowLearnAC, toggleWinAC,
} from '../../redux/actions/actions'
import { LEAR_POPUP_TEXT } from '../../enums'
import styles from './index.module.scss'
import looseGif from '../../img/loose.gif'
import winGif from '../../img/win.gif'
import beforeImg from '../../img/before.png'
import arrImg from '../../img/arr.png'
import afterImg from '../../img/after.png'

export const LoosePopup = () => {
  const dispatch = useDispatch()

  const complexity = useSelector(state => state?.info.complexityGame)

  useEffect(() => {
    dispatch(toggleLooseAC(true))
  }, [])

  return (
    <div className={styles.result}>
      <div className={styles.result__loose}>
        <p>Loose(((</p>
        <img src={looseGif} alt="winner" />
        <button
          onClick={() => dispatch(createGameThunk(complexity))}
          className={styles.play_again}
        >
          play again
        </button>
      </div>
    </div>
  )
}

export const WinPopup = () => {
  const {
    time,
    allTime,
    complexityGame,
  } = useSelector(state => ({
    time: state?.info.time,
    allTime: state?.info.allTime,
    complexityGame: state?.info.complexityGame,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleWinAC(true))
  }, [])

  return (
    <div className={styles.result}>
      <div className={styles.result__win}>
        <div className={styles}>
          <p>Win!!!</p>
          <p className={styles}>
            You result:
            {' '}
            {allTime - time}
            {' '}
            seconds
          </p>
        </div>
        <img src={winGif} alt="winner" />
        <button
          onClick={() => dispatch(createGameThunk(complexityGame))}
          className={styles.play_again}
        >
          play again
        </button>
      </div>
    </div>
  )
}

export const LearnPopup = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.info}>
      <div className={styles.info__content}>
        <p>{LEAR_POPUP_TEXT}</p>
        <div className={styles.info__images}>
          <img className={styles.info__img} src={beforeImg} alt="before" />
          <img src={arrImg} alt="" width={70} />
          <img className={styles.info__img} src={afterImg} alt="after" />
        </div>
        <button
          onClick={() => dispatch(toggleShowLearnAC(false))}
          className={styles.btn_open_game}
        >
          ok
        </button>
      </div>
    </div>
  )
}
