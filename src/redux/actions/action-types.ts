import { BackgroundType, ComplexityType } from '../../enums'

export enum ActionTypes {
  SET_BACKGROUND = 'SET_BACKGROUND',
  SET_COMPLEXITY = 'SET_COMPLEXITY',
  SET_TIME = 'SET_TIME',
  SET_ALL_TIME = 'SET_ALL_TIME',
  SET_COUNT_ITEMS = 'SET_COUNT_ITEMS',
  ADD_CHOSEN_ITEM = 'ADD_CHOSEN_ITEM',
  RESET_OPENS_ITEMS = 'RESET_OPENS_ITEMS',
  RESET_CHOSEN_ITEMS = 'RESET_CHOSEN_ITEMS',
  ADD_OPENS_ITEM = 'ADD_OPENS_ITEM',
  SET_PICTURES = 'SET_PICTURES',
  TOGGLE_SHOW_LEARN = 'TOGGLE_SHOW_LEARN',
  TOGGLE_START_GAME = 'TOGGLE_START_GAME',
  TOGGLE_WIN = 'TOGGLE_WIN',
  TOGGLE_LOOSE = 'TOGGLE_LOOSE',
}

export interface ISetComplexity {
  type: ActionTypes.SET_COMPLEXITY,
  payload: ComplexityType,
}

export interface ISetBackground {
  type: ActionTypes.SET_BACKGROUND,
  payload: BackgroundType,
}

export interface ISetTime {
  type: ActionTypes.SET_TIME,
  payload: number,
}

export interface ISetALlTime {
  type: ActionTypes.SET_ALL_TIME,
  payload: number,
}

export interface IToggleWin {
  type: ActionTypes.TOGGLE_WIN,
  payload: boolean,
}

export interface IToggleLoose {
  type: ActionTypes.TOGGLE_LOOSE,
  payload: boolean,
}

export interface IToggleShowLearn {
  type: ActionTypes.TOGGLE_SHOW_LEARN,
  payload: boolean,
}

export interface IToggleStartGame {
  type: ActionTypes.TOGGLE_START_GAME,
  payload: boolean,
}

export interface ISetCountItems {
  type: ActionTypes.SET_COUNT_ITEMS,
  payload: number,
}

export interface ISetPictures {
  type: ActionTypes.SET_PICTURES,
  payload: string[],
}

export interface IAddOpensItem {
  type: ActionTypes.ADD_OPENS_ITEM,
  payload: number,
}

export interface IAddChosenItem {
  type: ActionTypes.ADD_CHOSEN_ITEM,
  payload: number,
}

export interface IResetOpenItems {
  type: ActionTypes.RESET_OPENS_ITEMS,
}

export interface IResetChosenItems {
  type: ActionTypes.RESET_CHOSEN_ITEMS,
}

export type ActionType = ISetComplexity
| ISetBackground
| ISetTime
| ISetALlTime
| IToggleLoose
| IToggleWin
| IToggleShowLearn
| ISetCountItems
| ISetPictures
| IAddOpensItem
| IToggleStartGame
| IAddChosenItem
| IResetOpenItems
| IResetChosenItems
