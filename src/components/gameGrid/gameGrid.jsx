import React, { useEffect } from 'react'
import styles from './gameGrid.module.scss'
import PanelComplexity from './panelComplexity/panelComplexity'
import {connect} from 'react-redux'
import { addChoosenItem, addOpensItem, createGame, setChoosenItemsInNule, setTime, toggleLoose, toggleShowLearn } from '../../redux/reducers/infoReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { ContainerLoose, ContainerWin, Learn } from '../popups/popups'
let timeout;
const GameGrid = (props) => {

   let complexity = props.location.pathname.split('').slice(1).join('')
   useEffect(()=>{
     props.createGame(complexity)
   }, [props.location.pathname])

   useEffect(()=>{
      props.createGame(complexity)
    }, [])
    
   useEffect(()=>{
      if(props.choosenItems.length===2){
         if(props.colors[props.choosenItems[0]]===props.colors[props.choosenItems[1]] &&  props.choosenItems[0]!==props.choosenItems[1]) {
            props.addOpensItem(props.choosenItems[0]); props.addOpensItem(props.choosenItems[1]); props.setChoosenItemsInNule()
         }
        else  setTimeout(()=> props.setChoosenItemsInNule(), 500)
      }
   }, [props.choosenItems])

    useEffect(()=>{
       if(props.isStartGame)timeout=setTimeout(()=>{props.setTime(props.time-1)},800)  
       else  clearTimeout(timeout)
   }, [props.isStartGame,props.time])

   if(props.time===0)return < ContainerLoose/>
   if(props.isShowLearn)return < Learn toggleShowLearn={props.toggleShowLearn}/>
   if(props.opensItems.length === props.countItems)return < ContainerWin />
   return (
      <div className={styles.game}>
         <PanelComplexity />
          <p className={`${styles.time} ${props.time<11?styles.redTime:''}`}>time: {props.time}</p>
          <div className={complexity==='hard'?styles.gameGridHard:styles.gameGridEasy}> 
            {  
               props.colors.map((color, id)=> {
                  return (
                     <div  key={id} onClick={props.isStartGame?
                        ()=>{ if(!props.opensItems.includes(id)&&props.choosenItems.length<2)props.addChoosenItem(id);}
                        :()=>{}} 
                     style={props.opensItems.includes(id)||props.choosenItems.includes(id)?
                        {background: color}:{background: 'black'}}
                      className={styles.gridItem}></div>
                  )
               })
            }
          </div>
          <progress className={styles.progressbar} value={props.opensItems.length} max={props.countItems}></progress>
         
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      time: state.info.time,
      isStartGame: state.info.isStartGame,
      isLoose: state.info.isLoose, 
      countItems: state.info.countItems,
      colors: state.info.colors,
      opensItems: state.info.opensItems,
      choosenItems: state.info.choosenItems,
      isShowLearn: state.info.isShowLearn,
      allTime: state.info.allTime,
      background: state.info.background
   }
}

export default compose(
   withRouter,
   connect(mapStateToProps, {setTime, toggleLoose, createGame, addOpensItem,addChoosenItem,setChoosenItemsInNule, toggleShowLearn})
)(GameGrid)  