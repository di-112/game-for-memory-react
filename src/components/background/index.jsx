import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBackgroundAC } from '../../redux/actions/actions'
import { BACKGROUND_TYPES, ACTIVE_CLASS } from '../../enums'
import styles from './index.module.scss'

const Background = () => {
  const background = useSelector(state => state?.info.background)
  const dispatch = useDispatch()
  const setBackground = image => dispatch(setBackgroundAC(image))

  const addBackgroundButton = (message, key) => (
    <button
      key={key}
      onClick={() => setBackground(message)}
      className={background === message ? ACTIVE_CLASS : null}
    >
      {message}
    </button>
  )

  return (
    <div className={styles.panelBackground}>
      {Object.keys(BACKGROUND_TYPES).map(key => addBackgroundButton(BACKGROUND_TYPES[key], key))}
    </div>
  )
}

export default Background
