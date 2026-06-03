'use client'

import { House, BookCheck, UserPen, Settings2 } from "lucide-react"

export default function BottomNav(){
    const navItems = [
        { id: 'home', label: 'Home', icon: House },
        { id: 'courses', label: 'Courses', icon: BookCheck},
        { id: 'profile', label: 'Profile', icon: UserPen},
        { id: 'settings', label: 'Settings', icon: Settings2},
      ]
    return (
  <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-900 border-t border-gray-800 p-3 md:hidden">
    {navItems.map((item) => {
      const Icon = item.icon
      return (
        <li key={item.id} className="flex flex-col items-center gap-1 cursor-pointer">
          <Icon size={20} />
          <span className="text-xs">{item.label}</span>
        </li>
      )
    })}
  </nav>
)
}