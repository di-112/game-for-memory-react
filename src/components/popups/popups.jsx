import React from 'react'
import {connect} from 'react-redux'
import styles from './popups.module.scss'
import looseGif from '../../img/loose.gif'
import winGif from '../../img/win.gif'
import beforeImg from '../../img/before.png'
import arrImg from '../../img/arr.png'
import afterImg from '../../img/after.png'
import { createGame, toggleLoose, toggleStartGame, toggleWin } from '../../redux/reducers/infoReducer'

const Loose = ({toggleLoose, createGame, complexityGame}) => {
   toggleLoose(true)
   return (
      <div className={styles.result}>
      <div className={styles.result__loose}>
         <p>Loose(((</p>
         <img src={looseGif} alt="winner"/>
         <button onClick={()=>createGame(complexityGame) } class={styles.play_again}>play again</button>
      </div>
      </div>
   )
}

export const ContainerLoose = connect((state)=>{
   return {
      isLoose: state.info.isLoose, 
      complexityGame: state.info.complexityGame
   }
}, {toggleLoose, createGame, toggleStartGame})(Loose)

const Win = ({time, createGame, toggleWin, complexityGame, allTime}) => {
   let Resulttime = allTime-time;
   toggleWin(true)
   return (
      <div className={styles.result}>
         <div className={styles.result__win}>
         <div className={styles.rsult__info}>  
            <p>Win!!!</p>
            <p className={styles.result__time}>You result: {Resulttime} seconds</p>
         </div>
         <img src={winGif} alt="winner"/>
         <button onClick={()=>createGame(complexityGame)} className={styles.play_again}>play again</button>
        </div>
      </div>
   )
}

export const ContainerWin = connect((state)=>{
   return {
      isWin: state.info.isWin, 
      time: state.info.time,
      allTime: state.info.allTime,
      complexityGame: state.info.complexityGame
   } 
}, {toggleWin, createGame, toggleStartGame})(Win)

export const Learn = ({toggleShowLearn}) => {
   return (
      <div className={styles.info}>
         <div className={styles.info__content}>
            <p>Перед вами будет представлено игровое поле из четного количества квадратов, 
               за каждым из которых скрыт определленый цвет. Кликнув по квадрату, вы увидите какой цвет за ним закреплен. 
               Кликнув по следующему квадрату воможны 2 сценария: 1) выбранные квадраты одного цвета и они останутся открытыми 
               2) выбранные квадраты разного цвета и через пол секунды они закроются. Ваша задача найти за определенный промежуток времени все 
               пары квадратов по их цветам. Удачи!!!
            </p>
            <div className={styles.info__imgs}>
               <img className={styles.info__img} src={beforeImg} alt=""/>
               <img className={styles.info__arr} src={arrImg} alt="" width="70px"/>
               <img className={styles.info__img} src={afterImg} alt=""/>
            </div>
            <button onClick={toggleShowLearn} className={styles.btn_open_game}>ok</button>
         </div>
      </div>
   )
}
