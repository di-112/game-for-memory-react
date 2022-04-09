import { ActionType, ActionTypes } from './actions/action-types'
import { BackgroundType, ComplexityType, PICTURES } from '../enums'

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

export interface IState {
  background: BackgroundType,
  complexityGame: ComplexityType,
  countItems: number,
  pictures: string[],
  isShowLearn: boolean,
  isStartGame: boolean,
  isWin: boolean,
  isLoose: boolean,
  time: number,
  allTime: number,
  opensItems: number[],
  chosenItems: number[],
}

const initialState: IState = {
  background: BackgroundType.SEA,
  complexityGame: ComplexityType.EASY,
  countItems: 12,
  pictures: PICTURES.filter((_, index) => index < 6),
  isShowLearn: true,
  isStartGame: false,
  isWin: false,
  isLoose: false,
  time: 30,
  allTime: 30,
  opensItems: [],
  chosenItems: [],
}

const reducer = (state: IState = initialState, action: ActionType) : IState => {
  switch (action.type) {
    case SET_BACKGROUND: return ({ ...state, background: action.payload })

    case SET_COMPLEXITY: return ({ ...state, complexityGame: action.payload })

    case SET_TIME: return ({ ...state, time: action.payload })

    case SET_ALL_TIME: return ({ ...state, allTime: action.payload })

    case TOGGLE_SHOW_LEARN: return ({ ...state, isShowLearn: action.payload })

    case TOGGLE_START_GAME: return ({ ...state, isStartGame: action.payload })

    case SET_COUNT_ITEMS: return ({ ...state, countItems: action.payload })

    case SET_PICTURES: return ({ ...state, pictures: [...action.payload] })

    case RESET_OPENS_ITEMS: return ({ ...state, opensItems: [] })

    case ADD_OPENS_ITEM: return ({ ...state, opensItems: [...state.opensItems, action.payload] })

    case RESET_CHOSEN_ITEMS: return ({ ...state, chosenItems: [] })

    case ADD_CHOSEN_ITEM: return ({
      ...state,
      chosenItems: [...state.chosenItems, action.payload],
    })

    case TOGGLE_WIN: return ({
      ...state,
      isStartGame: false,
      isWin: action.payload,
    })

    case TOGGLE_LOOSE: return ({
      ...state,
      isStartGame: false,
      isLoose: action.payload,
    })

    default: return { ...state }
  }
}

export default reducer
