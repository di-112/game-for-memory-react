import React from 'react'
import { connect } from 'react-redux'
import { setBackgrd } from '../../redux/reducers/infoReducer'
import styles from './background.module.scss'

const Background = (props) => {

   const addBackgrdBtn = (message) => (<button onClick={()=>props.setBackgrd(`${message}`)}  
   className={props.background===`${message}`?'active':''}>{message}</button>)

   return (
      <div className = {styles.panelBackground} >
         {addBackgrdBtn('rain')}
         {addBackgrdBtn('sea')}
         {addBackgrdBtn('fire')}
      </div>
   )
}

const mapStateToProps = (state) => {
   return ({
      background: state.info.background,
   })
} 

export default connect(mapStateToProps, {setBackgrd})(Background)