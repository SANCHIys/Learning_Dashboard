import "./globals.css"
import { PT_Mono } from 'next/font/google'

const ptMono = PT_Mono({ 
  weight: '400',
  subsets: ['latin'] 
})
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-black text-white ${ptMono.className}`}>        
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}