import { ACTION_TYPES } from './action-types'
import { PICTURES, COMPLEXITY } from '../../enums'

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
} = ACTION_TYPES

export const setComplexityAC = complexityGame => ({ type: SET_COMPLEXITY, complexityGame })

export const setBackgroundAC = background => ({ type: SET_BACKGROUND, background })

export const setTimeAC = time => ({ type: SET_TIME, time })

export const setAllTimeAC = allTime => ({ type: SET_ALL_TIME, allTime })

export const toggleWinAC = isWin => ({ type: TOGGLE_WIN, isWin })

export const toggleLooseAC = isLoose => ({ type: TOGGLE_LOOSE, isLoose })

export const toggleShowLearnAC = isSHowLearn => ({ type: TOGGLE_SHOW_LEARN, isSHowLearn })

export const toggleStartGameAC = isStartGame => ({ type: TOGGLE_START_GAME, isStartGame })

export const setCountItemsAC = countItems => ({ type: SET_COUNT_ITEMS, countItems })

export const setPicturesAC = pictures => ({ type: SET_PICTURES, pictures })

export const addOpensItemAC = item => ({ type: ADD_OPENS_ITEM, item })

export const resetOpenItemsAC = () => ({ type: RESET_OPENS_ITEMS })

export const addChosenItemAC = item => ({ type: ADD_CHOSEN_ITEM, item })

export const resetChosenItemsAC = () => ({ type: RESET_CHOSEN_ITEMS })

const setGameProperties = (dispatch, countItems, time, PICTURES) => {
  dispatch(setCountItemsAC(countItems))
  dispatch(setAllTimeAC(time))
  dispatch(setTimeAC(time))
  dispatch(setPicturesAC(PICTURES.concat(PICTURES).sort(() => 0.5 - Math.random())))
}

export const createGameThunk = complexity => dispatch => {
  dispatch(toggleStartGameAC(false))
  dispatch(toggleLooseAC(false))
  dispatch(toggleWinAC(false))
  dispatch(setComplexityAC(complexity))
  dispatch(resetChosenItemsAC())
  dispatch(resetOpenItemsAC())
  switch (complexity) {
    case COMPLEXITY.EASY: setGameProperties(dispatch, 12, 30, PICTURES.filter((_, index) => index < 6)); break
    case COMPLEXITY.MIDDLE: setGameProperties(dispatch, 16, 45, PICTURES.filter((_, index) => index < 8)); break
    case COMPLEXITY.HARD: setGameProperties(dispatch, 20, 60, PICTURES.filter((_, index) => index < 10)); break
    default: setGameProperties(dispatch, 12, 30, PICTURES.filter((_, index) => index < 6)); break
  }
}
