import {motion} from 'motion/react';
import { FC, PropsWithChildren } from 'react';

export const PageEnterAnimationLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 10}}
      animate={{opacity: 1, y: 0}}
      style={{height: "100%"}}
      >
      {children}
    </motion.div>
  )
}