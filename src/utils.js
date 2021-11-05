export const isRightChoose = (choosenItems, colors) => {
  if (!Array.isArray(choosenItems) || !Array.isArray(colors)) return null
  return colors[choosenItems[0]] === colors[choosenItems[1]] && choosenItems[0] !== choosenItems[1]
}
export const isGameOver = time => time === 0

export const isGameWin = (opensItems, countItems) => opensItems.length === countItems

export const isOpenedNowItem = (id, opensItems, choosenItems) => opensItems.includes(id) || choosenItems.includes(id)

export const getComplexity = location => location.pathname.split('').slice(1).join('')
