import React from 'react'
import { connect } from 'react-redux'
import Background from '../background/background'
import GameGrid from '../gameGrid/gameGrid'
import PanelStartGame from '../panelStartGame/panelStartGame'
import Sound from '../sound/sound'
import styles from './gameWrapper.module.scss'

const GameWrapper = (props) => {
   return (
      <div  className={styles.wrapper + ' ' + styles[props.background]}>
         <Sound />
         <PanelStartGame />
         <GameGrid />
         <Background />
       </div> 
   )
}

export default connect(
   (state)=>({background: state.info.background})
)(GameWrapper)