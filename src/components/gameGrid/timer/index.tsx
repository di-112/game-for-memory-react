import { motion, useAnimation } from 'framer-motion'
import React, { FC, useEffect, useRef } from 'react'
import classnames from 'classnames/bind'
import styles from '../style.scss'

interface ITimer {
  time: number,
  isStartGame: boolean,
  setTime: (time: number) => void
}

const cn = classnames.bind(styles)

const Timer: FC<ITimer> = ({
  time,
  setTime,
  isStartGame,
}) => {
  const control = useAnimation()

  const timer = useRef<number>()

  useEffect(() => {
    const updateTime = async () => {
      if (isStartGame) {
        if (time < 11) {
          await control.start({ scale: 2, transition: { duration: 0.25 } })
          await control.start({ scale: 1, transition: { duration: 0.25 } })
        }
        if (time > 0) {
          timer.current = setTimeout(() => setTime(time - 1), 1000)
        }
        return
      }
      clearTimeout(timer.current)
    }

    updateTime()
  }, [isStartGame, time])

  return (
    <p className={cn('time', { redTime: time < 11 })}>
      time:
      {' '}
      <motion.span animate={control}>{time}</motion.span>
    </p>
  )
}

export default Timer
