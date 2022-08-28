import React from 'react'
import { ACTIVE_CLASS, BackgroundType } from '../../enums'
import styles from './style.scss'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Background = () => {
  const background = useTypedSelector(state => state.background)
  const { setBackground } = useAction()

  const renderButton = (message, key) => (
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
      {Object.keys(BackgroundType).map(key => renderButton(BackgroundType[key], key))}
    </div>
  )
}

export default Background
