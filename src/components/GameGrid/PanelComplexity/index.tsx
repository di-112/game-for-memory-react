import React from 'react'
import { ACTIVE_CLASS, ComplexityType } from '../../../enums'
import styles from './style.scss'
import { useAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const PanelComplexity = () => {
  const { setComplexity } = useAction()

  const complexity = useTypedSelector(state => state.complexityGame)

  return (
    <nav className={styles.gameComplex}>
      {Object.keys(ComplexityType).map(key => (
        <button
          key={key}
          onClick={() => setComplexity(ComplexityType[key])}
          className={complexity === ComplexityType[key] ? ACTIVE_CLASS : null}
        >
          {ComplexityType[key]}
        </button>
      ))}
    </nav>
  )
}

export default PanelComplexity
