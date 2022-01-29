import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIVE_CLASS, COMPLEXITY } from '../../../enums'
import styles from './index.module.scss'
import { setComplexityAC } from '../../../redux/actions/actions'

const PanelComplexity = () => {
  const dispatch = useDispatch()

  const complexity = useSelector(state => state?.info.complexityGame)

  return (
    <nav className={styles.gameComplex}>
      {Object.keys(COMPLEXITY).map(key => (
        <button
          key={key}
          onClick={() => dispatch(setComplexityAC(COMPLEXITY[key]))}
          className={complexity === COMPLEXITY[key] ? ACTIVE_CLASS : null}
        >
          {COMPLEXITY[key]}
        </button>
      ))}
    </nav>
  )
}

export default PanelComplexity
