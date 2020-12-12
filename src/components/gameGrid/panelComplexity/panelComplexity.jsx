import React from 'react'
import styles from './panelComplexity.module.scss'
import {NavLink} from 'react-router-dom'

const PanelComplexity = (props) => {
   return (
      <nav className={styles.gameComplex}>
         <NavLink to="/easy">Easy</NavLink>
         <NavLink to="/middle">Middle</NavLink>
         <NavLink to="/hard">Hard</NavLink>
      </nav>
   )
}


export default PanelComplexity