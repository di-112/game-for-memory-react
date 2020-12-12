import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { createGame, toggleStartGame, toggleWin } from '../../redux/reducers/infoReducer'
import styles from './panelStartGame.module.scss'


const PanelStartGame = ({time, toggleStartGame, toggleWin, isStartGame, createGame, ...props}) => {

   let complex = props.location.pathname.split('').slice(1).join('')
   return (
      <div className={styles.panelStartGame}>
         <button onClick={()=>toggleStartGame(true)}
            className={styles.startGame+' '+(isStartGame&&styles.active)}
         >Start</button>
         <button onClick={()=> createGame(complex)}>Reset</button>
      </div>
   )
}


const mapStatetoProps = (state) =>{
   return {
      isStartGame: state.info.isStartGame,
      time: state.info.time
   }
}

export default  compose(
   withRouter,
   connect(mapStatetoProps, {toggleStartGame, toggleWin, createGame})
)(PanelStartGame)