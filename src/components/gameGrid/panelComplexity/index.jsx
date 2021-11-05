import React from 'react'
import { NavLink } from 'react-router-dom'
import { COMPLEXITY } from '../../../enums'
import styles from './index.module.scss'

const PanelComplexity = () => (
  <nav className={styles.gameComplex}>
    {Object.keys(COMPLEXITY).map(key => <NavLink key={key} to={`/${COMPLEXITY[key]}`}>{COMPLEXITY[key]}</NavLink>)}
  </nav>
)

export default PanelComplexity
