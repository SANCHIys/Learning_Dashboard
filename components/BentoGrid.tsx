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
    className,
  }: {
    children: React.ReactNode
    className?: string
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
      <motion.div 
      animate="visible" 
      variants={containerVariants} 
      initial='hidden'
      className={className}>
      {children}
    </motion.div>
    )
}