const SET_BACKGRD =  'SET_BACKGRD'
const SET_COMPLEXITY =  'SET_COMPLEXITY'
const SET_TIME =  'SET_TIME'
const SET_ALL_TIME =  'SET_ALL_TIME'
const SET_COUNT_ITEMS =  'SET_COUNT_ITEMS'
const ADD_CHOOSEN_ITEM =  'ADD_CHOOSEN_ITEM'
const SET_OPENS_ITEMS_IN_NULE =  'SET_OPENS_ITEMS_IN_NULE'
const SET_CHOOSEN_ITEMS_IN_NULE = 'SET_CHOOSEN_ITEMS_IN_NULE'
const ADD_OPENS_ITEM =  'ADD_OPENS_ITEM'
const SET_COLORS =  'SET_COLORS'
const TOGGLE_SHOW_LEARN =  'TOGGLE_SHOW_LEARN'
const TOGGLE_START_GAME =  'TOGGLE_START_GAME'
const TOGGLE_WIN =  'TOGGLE_WIN'
const TOGGLE_LOOSE =  'TOGGLE_LOOSE'



const initialState = {
   background: 'sea',
   complexityGame: 'easy',
   countItems: 12,
   colors: ['gray', 'green', 'red', 'yellow', 'blueviolet', 'peru'],
   isShowLearn: true,
   isStartGame: false,
   isWin: false,
   isLoose: false,
   time: 30,
   allTime: 30, 
   opensItems: [],
   choosenItems: []
}


const infoReducer = (state=initialState, action)=>{
   switch(action.type){
      case SET_BACKGRD: 
      return ({
         ...state,
         background: action.background
      })
      case SET_COMPLEXITY: return ({
         ...state,
         complexityGame: action.complexityGame
      })
      case SET_TIME: return ({
         ...state,
         time: action.time
      })
      case SET_ALL_TIME: return ({
         ...state,
         allTime: action.allTime
      })
      case TOGGLE_SHOW_LEARN: return ({
         ...state,
         isShowLearn: action.isShowLearn
      })
      case TOGGLE_START_GAME: return ({
         ...state,
         isStartGame: action.isStartGame
      })
      case TOGGLE_WIN: return ({
         ...state,
         isStartGame: false,
         isWin: action.isWin
      })
      case TOGGLE_LOOSE: return ({
         ...state,
         isStartGame: false,
         isLoose: action.isLoose,
      })
      case SET_COUNT_ITEMS: return ({
         ...state,
         countItems: action.countItems
      })
      case SET_COLORS: return ({
         ...state,
         colors: [...action.colors]
      })
      case SET_OPENS_ITEMS_IN_NULE: return ({
         ...state,
         opensItems: []
      })
      case ADD_OPENS_ITEM: return ({
         ...state,
         opensItems: [...state.opensItems.concat([action.item])]
      })
      case ADD_CHOOSEN_ITEM: 
         return ({
         ...state,
         choosenItems: [...state.choosenItems.concat([action.item])]
      })
      case SET_CHOOSEN_ITEMS_IN_NULE: return ({
         ...state,
         choosenItems: []
      })
      default: return {...state}
   }

}

export default infoReducer

export const setComplexity = (complexityGame) => ({type: SET_COMPLEXITY, complexityGame})

export const setBackgrd = (background) => ({type: SET_BACKGRD, background})

export const setTime = (time) => ({type: SET_TIME, time})

export const setAllTime = (time) => ({type: SET_TIME, time})

export const toggleWin = (isWin) => ({type: TOGGLE_WIN, isWin})

export const toggleLoose = (isLoose) =>({type: TOGGLE_LOOSE, isLoose})

export const toggleShowLearn = (isSHowLearn) =>({type: TOGGLE_SHOW_LEARN, isSHowLearn})

export const toggleStartGame = (isStartGame) => ({type: TOGGLE_START_GAME, isStartGame})

export const setCountItems = (countItems) => ({type: SET_COUNT_ITEMS, countItems})

export const setColors = (colors) => ({type: SET_COLORS, colors})

export const addOpensItem = (item) => ({type: ADD_OPENS_ITEM, item})

export const setOpensItemsInNule = () => ({type: SET_OPENS_ITEMS_IN_NULE})

export const addChoosenItem = (item) => ({type: ADD_CHOOSEN_ITEM, item})

export const setChoosenItemsInNule = () => ({type: SET_CHOOSEN_ITEMS_IN_NULE})


const setGameProperties = (dispatch ,countItems, time, colors) => {
   dispatch(setCountItems(countItems))
   dispatch(setAllTime(time))
   dispatch(setTime(time))
   dispatch(setColors(colors.concat(colors).sort(()=>0.5-Math.random())))
}


export const createGame = (complexity) => (dispatch) => {
   dispatch(toggleStartGame(false))
   dispatch(toggleLoose(false))
   dispatch(toggleWin(false))
   dispatch(setComplexity(complexity))
   dispatch(setChoosenItemsInNule())
   dispatch(setOpensItemsInNule())
   switch(complexity){
      case 'easy': setGameProperties(dispatch, 12, 30, ['gray', 'green', 'red', 'yellow', 'blueviolet', 'peru']); break
      case 'middle': setGameProperties(dispatch, 16, 45, ['gray', 'green', 'red', 'yellow', 'blueviolet', 'peru', 'Aqua', 'DarkOrange']); break 
      case 'hard': setGameProperties(dispatch, 20, 60, ['gray', 'green', 'red', 'yellow', 'blueviolet', 'peru', 'Aqua', 'DarkOrange', 'Fuchsia', 'DarkSlateGray']); break
      default: setGameProperties(dispatch, 12, 30, ['gray', 'green', 'red', 'yellow', 'blueviolet', 'peru']); break
   }
}
