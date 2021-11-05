import { getPictures } from './utils'

export const PICTURES = getPictures()

export const BACKGROUND_TYPES = {
  RAIN: 'rain',
  SEA: 'sea',
  FIRE: 'fire',
}
export const DEFAULT_COLOR = 'rgba(0, 0, 0, .9)'

export const ACTIVE_CLASS = 'active'

export const TIME_SHOW_ITEM = 500

export const COMPLEXITY = {
  EASY: 'easy',
  MIDDLE: 'middle',
  HARD: 'hard',
}

export const LEAR_POPUP_TEXT = `
  Перед вами будет представлено игровое поле из четного количества квадратов,
  за каждым из которых скрыт определленый цвет. Кликнув по квадрату, вы
  увидите какой цвет за ним закреплен.
  Кликнув по следующему квадрату воможны 2 сценария:
  1) выбранные квадраты одного цвета и они останутся открытыми
  2) выбранные квадраты разного цвета и через пол секунды они закроются.
  Ваша задача найти за определенный промежуток времени все
  пары квадратов по их цветам.
  Удачи!!!`
