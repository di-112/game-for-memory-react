import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../gameGrid/index.module.scss'

const ProgressBar = () => {
  const {
    countItems,
    opensItems,
  } = useSelector(state => state?.info)

  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!opensItems.length) {
      setValue(0)
      return
    }
    const newValue = Math.round((opensItems.length / countItems) * 100)
    const interval = setInterval(() => {
      setValue(oldValue => {
        if (oldValue + 1 < newValue) return oldValue + 1
        clearInterval(interval)
        return oldValue
      })
    }, 10)
  }, [opensItems.length])

  return (
    <progress className={styles.progressbar} value={value} max={100} />
  )
}

export default ProgressBar
