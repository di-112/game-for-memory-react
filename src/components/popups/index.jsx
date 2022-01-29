import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import {
  createGameThunk, resetOpenItemsAC, toggleLooseAC, toggleShowLearnAC, toggleWinAC,
} from '../../redux/actions/actions'
import { LEAR_POPUP_TEXT } from '../../enums'
import styles from './index.module.scss'
import looseGif from '../../img/loose.gif'
import winGif from '../../img/win.gif'
import beforeImg from '../../img/before.png'
import arrImg from '../../img/arr.png'
import afterImg from '../../img/after.png'

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.8,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
}

export const LoosePopup = () => {
  const dispatch = useDispatch()

  const complexityGame = useSelector(state => state?.info.complexityGame)

  useEffect(() => {
    dispatch(toggleLooseAC(true))
  }, [])

  return (
    <div className={styles.result}>
      <motion.div
        className={styles.result__loose}
        initial="hidden"
        animate="visible"
        exit={variants.hidden}
        variants={variants}
      >
        <p>Loose(((</p>
        <img src={looseGif} alt="looser" />
        <button
          onClick={() => {
            dispatch(createGameThunk(complexityGame))
          }}
          className={styles.play_again}
        >
          play again
        </button>
      </motion.div>
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
      <motion.div
        className={styles.result__win}
        initial="hidden"
        animate="visible"
        exit={variants.hidden}
        variants={variants}
      >
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
          onClick={() => {
            dispatch(dispatch(resetOpenItemsAC()))
            setTimeout(() => {
              dispatch(createGameThunk(complexityGame))
            }, 500)
          }}
          className={styles.play_again}
        >
          play again
        </button>
      </motion.div>
    </div>
  )
}

export const LearnPopup = () => {
  const dispatch = useDispatch()
  return (
    <div
      className={styles.info}
    >
      <motion.div
        className={styles.info__content}
        initial="hidden"
        animate="visible"
        exit={variants.hidden}
        variants={variants}
      >
        <div>
          {LEAR_POPUP_TEXT.map(paragraph => (
            <p key={paragraph}>
              {paragraph}
              <br />
            </p>
          ))}
        </div>
        <div className={styles.info__images}>
          <img className={styles.info__img} src={beforeImg} alt="before" />
          <img src={arrImg} alt="" width={60} />
          <img className={styles.info__img} src={afterImg} alt="after" />
        </div>
        <button
          onClick={() => dispatch(toggleShowLearnAC(false))}
          className={styles.btn_open_game}
        >
          ok
        </button>
      </motion.div>
    </div>
  )
}
