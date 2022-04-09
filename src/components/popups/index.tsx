import React, { FC, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LEAR_POPUP_TEXT } from '../../enums'
import styles from './style.scss'
import looseGif from '../../img/loose.gif'
import winGif from '../../img/win.gif'
import beforeImg from '../../img/before.png'
import arrImg from '../../img/arr.png'
import afterImg from '../../img/after.png'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'

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

export const LoosePopup: FC = () => {
  const {
    createGame,
    toggleLoose,
  } = useAction()

  const complexityGame = useTypedSelector(state => state.complexityGame)

  useEffect(() => {
    toggleLoose(true)
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
            createGame(complexityGame)
          }}
          className={styles.play_again}
        >
          play again
        </button>
      </motion.div>
    </div>
  )
}

export const WinPopup: FC = () => {
  const {
    time,
    allTime,
    complexityGame,
  } = useTypedSelector(state => ({
    time: state.time,
    allTime: state.allTime,
    complexityGame: state.complexityGame,
  }))

  const {
    createGame,
    toggleWin,
    resetOpenItems,
  } = useAction()

  useEffect(() => {
    toggleWin(true)
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
        <div>
          <p>Win!!!</p>
          <p>
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
            resetOpenItems()
            setTimeout(() => {
              createGame(complexityGame)
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

export const LearnPopup: FC = () => {
  const {
    toggleShowLearn,
  } = useAction()
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
          onClick={() => toggleShowLearn(false)}
          className={styles.btn_open_game}
        >
          ok
        </button>
      </motion.div>
    </div>
  )
}
