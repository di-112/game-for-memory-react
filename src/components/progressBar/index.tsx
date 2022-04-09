import React, { FC, useEffect, useState } from 'react'
import styles from '../gameGrid/style.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const ProgressBar: FC = () => {
  const {
    countItems,
    opensItems,
  } = useTypedSelector(state => state)

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

export default React.memo(ProgressBar)
