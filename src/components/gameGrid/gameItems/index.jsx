import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isOpenedNowItem } from '../../../utils'
import styles from '../index.module.scss'
import { DEFAULT_COLOR } from '../../../enums'

const variants = {

  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
}

const GameItems = ({
  pictures, isStartGame, handlerCLickItem, opensItems, choosenItems,
}) => pictures.map((picture, id) => (
  <motion.div
    key={id}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: DEFAULT_COLOR,
      cursor: choosenItems.length > 1 || opensItems.includes(id) ? 'not-allowed' : 'pointer',
    }}
    onClick={isStartGame ? () => handlerCLickItem(id) : null}
    className={styles.gridItem}
  >
    <AnimatePresence>
      {
        isOpenedNowItem(id, opensItems, choosenItems) && (
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
))

export default GameItems
