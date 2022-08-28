import React, { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isOpenedNowItem } from '../../../utils'
import styles from '../style.scss'
import { ComplexityType, DEFAULT_COLOR } from '../../../enums'

const variants = {

  hidden: {
    scale: 0.5,
    transition: { duration: 0.1 },
  },
  visible: {
    scale: 1,
    transition: { duration: 0.1 },
  },
}

interface IGameItems {
  pictures: string[],
  complexity: ComplexityType,
  isStartGame: boolean,
  handlerClickItem: (id: number) => void,
  opensItems: number[],
  chosenItems: number[],
  isShowLearn : boolean,
}

const GameItems: FC<IGameItems> = ({
  pictures,
  complexity,
  isStartGame,
  handlerClickItem,
  opensItems,
  chosenItems,
  isShowLearn,

}) => (
  <motion.div
    className={
        complexity === ComplexityType.HARD
          ? styles.gameGridHard
          : styles.gameGridEasy
    }
  >
    {pictures.map((picture, id) => (
      <motion.div
        key={id}
        layoutId={!isShowLearn && 'gridItem'}
        style={{
          background: DEFAULT_COLOR,
          cursor: chosenItems.length > 1 || opensItems.includes(id) ? 'not-allowed' : 'pointer',
        }}
        onClick={isStartGame ? () => handlerClickItem(id) : null}
        className={styles.gridItem}
      >
        <AnimatePresence initial={false}>
          {
              isOpenedNowItem(id, opensItems, chosenItems) && (
              <motion.img
                src={picture}
                alt={picture}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                style={{ width: '85%', height: '85%' }}
              />
              )
          }
        </AnimatePresence>
      </motion.div>
    ))}
  </motion.div>
)

export default GameItems
