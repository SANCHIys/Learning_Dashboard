"use client"
import {useDashboard} from '@/lib/DashboardContext';
import { useState } from 'react';
import { BookCheck, House, Settings, UserPen, ChevronLeft, ChevronRight} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { activeItem, setActiveItem } = useDashboard()
    const navItems = [
        { id: 'home', label: 'Home', icon: House },
        { id: 'courses', label: 'Courses', icon: BookCheck},
        { id: 'profile', label: 'Profile', icon: UserPen},
        { id: 'settings', label: 'Settings', icon: Settings},
      ]
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    }
    return(
        <nav className="flex flex-col gap-4 w-26 transition-all duration-300">
            <button className="p-2 rounded-lg hover:bg-gray-800 mb-4" onClick={toggleCollapsed}>{isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}</button>
            <ul>
            {navItems.map((item) => {        
                const Icon = item.icon   
                const isActive = activeItem === item.id    
                return (                   
                    <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg--800" key={item.id} onClick={() => setActiveItem(activeItem === item.id ? '' : item.id)}>
                    {isActive && (
                        <motion.div
                            layoutId="active-pill"
                        />
                    )}
                    <Icon />
                    <AnimatePresence initial={false}>
                        {!isCollapsed && (
                            <motion.span
                                key={item.id}        
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}  
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                            </motion.span>
                        )}
                    </AnimatePresence>
                 </li>
                )})}
            </ul>
        </nav>
    )
}