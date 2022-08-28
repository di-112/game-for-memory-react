import RequireContext = __WebpackModuleApi.RequireContext;
import { BackgroundType, TIME_SHOW_ITEM } from './enums'
import audioSea from './audio/audio_sea.mp3'
import audioFire from './audio/audio_fire.mp3'
import audioRain from './audio/audio_rain.mp3'

export const isRightChoose = (
  chosenItems: number[] = [],
  pictures: string[] = [],
) : boolean => pictures[chosenItems[0]] === pictures[chosenItems[1]] && chosenItems[0] !== chosenItems[1]

export const isGameOver = (time : number) : boolean => time === 0

export const isGameWin = (opensItems : number[], countItems: number) : boolean => opensItems.length === countItems

export const isOpenedNowItem = (
  id : number,
  opensItems: number[],
  chosenItems: number[],
) : boolean => opensItems.includes(id) || chosenItems.includes(id)

export const getPictures = (
  context: RequireContext = require.context('./img/pictures/', false, /\.(png|jpe?g|svg)$/),
) : string[] => context.keys().map(picture => context(picture))

export const getTrack = (background : string) => {
  switch (background) {
    case BackgroundType.SEA: return audioSea
    case BackgroundType.FIRE: return audioFire
    case BackgroundType.RAIN: return audioRain
    default: return audioSea
  }
}

interface UpdateGameGridArgTypes {
  pictures: string[],
  chosenItems: number[],
  resetChosenItems: () => void,
  addOpensItem: (item: number) => void,
}

export const updateGameGrid = ({
  pictures,
  chosenItems,
  addOpensItem,
  resetChosenItems,
} : UpdateGameGridArgTypes) => {
  if (chosenItems.length === 2) {
    if (isRightChoose(chosenItems, pictures)) {
      chosenItems.map(item => addOpensItem(item))
      resetChosenItems()
    } else setTimeout(() => resetChosenItems(), TIME_SHOW_ITEM)
  }
}
