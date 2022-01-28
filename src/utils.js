export const isRightChoose = (chosenItems, pictures) => {
  if (!Array.isArray(chosenItems) || !Array.isArray(pictures)) return null
  return pictures[chosenItems[0]] === pictures[chosenItems[1]] && chosenItems[0] !== chosenItems[1]
}
export const isGameOver = time => time === 0

export const isGameWin = (opensItems, countItems) => opensItems.length === countItems

export const isOpenedNowItem = (id, opensItems, chosenItems) => opensItems.includes(id) || chosenItems.includes(id)

export const getComplexity = location => location.pathname.split('').slice(1).join('')

export const getPictures = (context = require.context('./img/pictures/', false, /\.(png|jpe?g|svg)$/)) => context
  .keys().map(picture => context(picture))
