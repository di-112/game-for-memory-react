export const isRightChoose = (choosenItems, pictures) => {
  if (!Array.isArray(choosenItems) || !Array.isArray(pictures)) return null
  return pictures[choosenItems[0]] === pictures[choosenItems[1]] && choosenItems[0] !== choosenItems[1]
}
export const isGameOver = time => time === 0

export const isGameWin = (opensItems, countItems) => opensItems.length === countItems

export const isOpenedNowItem = (id, opensItems, choosenItems) => opensItems.includes(id) || choosenItems.includes(id)

export const getComplexity = location => location.pathname.split('').slice(1).join('')

export const getPictures = (context = require.context('./img/pictures/', false, /\.(png|jpe?g|svg)$/)) => context
  .keys().map(picture => context(picture).default)
