import { ACTION_TYPES } from '../actions/action-types'
import { BACKGROUND_TYPES, PICTURES, COMPLEXITY } from '../../enums'

const {
  SET_BACKGROUND,
  SET_COMPLEXITY,
  SET_TIME,
  SET_ALL_TIME,
  SET_COUNT_ITEMS,
  ADD_CHOOSEN_ITEM,
  RESET_OPENS_ITEMS,
  RESET_CHOOSEN_ITEMS,
  ADD_OPENS_ITEM,
  SET_PICTURES,
  TOGGLE_SHOW_LEARN,
  TOGGLE_START_GAME,
  TOGGLE_WIN,
  TOGGLE_LOOSE,
} = ACTION_TYPES

const initialState = {
  background: BACKGROUND_TYPES.SEA,
  complexityGame: COMPLEXITY.EASY,
  countItems: 12,
  pictures: PICTURES.filter((_, index) => index < 6),
  isShowLearn: true,
  isStartGame: false,
  isWin: false,
  isLoose: false,
  time: 30,
  allTime: 30,
  opensItems: [],
  choosenItems: [],
}

const infoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BACKGROUND: return ({ ...state, background: action.background })

    case SET_COMPLEXITY: return ({ ...state, complexityGame: action.complexityGame })

    case SET_TIME: return ({ ...state, time: action.time })

    case SET_ALL_TIME: return ({ ...state, allTime: action.allTime })

    case TOGGLE_SHOW_LEARN: return ({ ...state, isShowLearn: action.isShowLearn })

    case TOGGLE_START_GAME: return ({ ...state, isStartGame: action.isStartGame })

    case SET_COUNT_ITEMS: return ({ ...state, countItems: action.countItems })

    case SET_PICTURES: return ({ ...state, pictures: [...action.pictures] })

    case RESET_OPENS_ITEMS: return ({ ...state, opensItems: [] })

    case ADD_OPENS_ITEM: return ({ ...state, opensItems: [...state.opensItems.concat([action.item])] })

    case RESET_CHOOSEN_ITEMS: return ({ ...state, choosenItems: [] })

    case ADD_CHOOSEN_ITEM: return ({
      ...state,
      choosenItems: [...state.choosenItems.concat([action.item])],
    })

    case TOGGLE_WIN: return ({
      ...state,
      isStartGame: false,
      isWin: action.isWin,
    })

    case TOGGLE_LOOSE: return ({
      ...state,
      isStartGame: false,
      isLoose: action.isLoose,
    })

    default: return { ...state }
  }
}

export default infoReducer
