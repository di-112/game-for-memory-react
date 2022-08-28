import { Dispatch } from 'redux'
import { ActionTypes, ActionType } from './action-types'
import { PICTURES, ComplexityType } from '../../enums'

const {
  SET_BACKGROUND,
  SET_COMPLEXITY,
  SET_TIME,
  SET_ALL_TIME,
  SET_COUNT_ITEMS,
  ADD_CHOSEN_ITEM,
  RESET_OPENS_ITEMS,
  RESET_CHOSEN_ITEMS,
  ADD_OPENS_ITEM,
  SET_PICTURES,
  TOGGLE_SHOW_LEARN,
  TOGGLE_START_GAME,
  TOGGLE_WIN,
  TOGGLE_LOOSE,
} = ActionTypes

export const setComplexity = (complexityGame) : ActionType => ({ type: SET_COMPLEXITY, payload: complexityGame })

export const setBackground = (background) : ActionType => ({ type: SET_BACKGROUND, payload: background })

export const setTime = (time) : ActionType => ({ type: SET_TIME, payload: time })

export const setAllTime = (allTime) : ActionType => ({ type: SET_ALL_TIME, payload: allTime })

export const toggleWin = (isWin) : ActionType => ({ type: TOGGLE_WIN, payload: isWin })

export const toggleLoose = (isLoose) : ActionType => ({ type: TOGGLE_LOOSE, payload: isLoose })

export const toggleShowLearn = (isSHowLearn) : ActionType => ({
  type: TOGGLE_SHOW_LEARN, payload: isSHowLearn,
})

export const toggleStartGame = (isStartGame) : ActionType => ({
  type: TOGGLE_START_GAME, payload: isStartGame,
})

export const setCountItems = (countItems) : ActionType => ({ type: SET_COUNT_ITEMS, payload: countItems })

export const setPictures = (pictures) : ActionType => ({ type: SET_PICTURES, payload: pictures })

export const addOpensItem = (item) : ActionType => ({ type: ADD_OPENS_ITEM, payload: item })

export const resetOpenItems = () : ActionType => ({ type: RESET_OPENS_ITEMS })

export const addChosenItem = (item) : ActionType => ({ type: ADD_CHOSEN_ITEM, payload: item })

export const resetChosenItems = () : ActionType => ({ type: RESET_CHOSEN_ITEMS })

const setGameProperties = (dispatch: Dispatch<ActionType>, countItems, time, pictures) => {
  dispatch(setCountItems(countItems))
  dispatch(setAllTime(time))
  dispatch(setTime(time))
  dispatch(setPictures(pictures.concat(pictures).sort(() => 0.5 - Math.random())))
}

export const createGame = complexity => (dispatch: Dispatch<ActionType>) => {
  dispatch(toggleStartGame(false))
  dispatch(toggleLoose(false))
  dispatch(toggleWin(false))
  dispatch(setComplexity(complexity))
  dispatch(resetChosenItems())
  dispatch(resetOpenItems())
  switch (complexity) {
    case ComplexityType.EASY: setGameProperties(dispatch, 12, 30, PICTURES.filter((_, index) => index < 6)); break
    case ComplexityType.MIDDLE: setGameProperties(dispatch, 16, 45, PICTURES.filter((_, index) => index < 8)); break
    case ComplexityType.HARD: setGameProperties(dispatch, 20, 60, PICTURES.filter((_, index) => index < 10)); break
    default: setGameProperties(dispatch, 12, 30, PICTURES.filter((_, index) => index < 6)); break
  }
}
