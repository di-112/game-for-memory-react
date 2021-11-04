import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { COMPLEXITY } from '../../../enums'

const PanelComplexity = () => (
  <nav className={styles.gameComplex}>
    <NavLink to={`/${COMPLEXITY.EASY}`}>Easy</NavLink>
    <NavLink to={`/${COMPLEXITY.MIDDLE}`}>Middle</NavLink>
    <NavLink to={`/${COMPLEXITY.HARD}`}>Hard</NavLink>
  </nav>
)

export default PanelComplexity
