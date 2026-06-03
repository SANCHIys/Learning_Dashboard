"use client"
import { Code, Database } from 'lucide-react'
import {motion} from 'framer-motion';
interface CourseCardProps {
    title: string;
    progress: number;
    icon_name: string;
}

export default function CourseCard({ title, progress, icon_name }: CourseCardProps) {
    const iconMap: { [key: string]: any } = {
        'Code': Code,
        'Database': Database,
      }
    const Icon = iconMap[icon_name];
    return (
        <motion.article
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }} 
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-500 transition-all">
            <Icon />
            <h3>{title}</h3>
            <div className="w-full h-2 bg-gray-600 rounded-full">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-indigo-500 rounded-full"
                />
            </div>
        </motion.article>
  )
}