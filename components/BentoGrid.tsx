"use client"
import {motion} from 'framer-motion';
export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
export default function BentoGrid({
    children,
  }: {
    children: React.ReactNode
  }) 
  {
    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }
    return(
        <motion.div animate="visible" variants={containerVariants} initial='hidden' className="grid grid-cols-3 grid-rows-3 gap-4 p-6">
            {children}
        </motion.div>
    )
}