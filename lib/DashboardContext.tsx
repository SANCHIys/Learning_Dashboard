'use client'
import { createContext, useContext, useState } from 'react'

interface DashboardContextType {
  activeItem: string
  setActiveItem: (item: string) => void
}

export const DashboardContext = createContext<DashboardContextType>({
  activeItem: '',
  setActiveItem: () => {}
})

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState('')
  return (
    <DashboardContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => useContext(DashboardContext)