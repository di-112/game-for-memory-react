import { getPictures } from './utils'

export enum BackgroundType {
  RAIN = 'rain',
  SEA = 'sea',
  FIRE = 'fire',
}

export enum ComplexityType {
  EASY = 'easy',
  MIDDLE = 'middle',
  HARD = 'hard',
}

export const PICTURES = getPictures()

export const DEFAULT_COLOR = 'rgba(0, 0, 0, .9)'

export const ACTIVE_CLASS = 'active'

export const TIME_SHOW_ITEM = 500

export const LEAR_POPUP_TEXT = [
  ` Перед вами будет представлено игровое поле из четного количества квадратов,
  за каждым из которых скрыта определенная картинка. Кликнув по квадрату, вы
  увидите, какая картинка за ним закреплена.`,
  'Кликнув по следующему квадрату воможны 2 сценария:',
  '1) Если выбранные квадраты скрывают одинаковые картинки, то они останутся открытыми',
  '2) Если выбранные квадраты скрывают разные картинки, то через пол секунды они закроются.',
  ` Ваша задача найти за определенный промежуток времени все
  пары картинок. Удачи!!!`,
]
