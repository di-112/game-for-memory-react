import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBackgroundAC } from '../../redux/actions/actions'
import styles from './index.module.scss'
import { BACKGROUND_TYPES } from '../../enums'

const Background = () => {
  const background = useSelector(state => state?.info.background)
  const dispatch = useDispatch()
  const setBackground = image => dispatch(setBackgroundAC(image))

  const addBackgroundButton = message => (
    <button
      onClick={() => setBackground(message)}
      className={background === message && 'active'}
    >
      {message}
    </button>
  )

  return (
    <div className={styles.panelBackground}>
      {Object.keys(BACKGROUND_TYPES).map(key => addBackgroundButton(BACKGROUND_TYPES[key]))}
    </div>
  )
}

export default React.memo(Background)
