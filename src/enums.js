export const BACKGROUND_TYPES = {
  RAIN: 'rain',
  SEA: 'sea',
  FIRE: 'fire',
}

export const COLORS = [
  'gray',
  'green',
  'red',
  'yellow',
  'blueviolet',
  'peru',
  'Aqua',
  'DarkOrange',
  'Fuchsia',
  'DarkSlateGray',
]

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