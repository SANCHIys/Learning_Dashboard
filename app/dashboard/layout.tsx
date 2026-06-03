import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { DashboardProvider } from "@/lib/DashboardContext";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <DashboardProvider>
          <section className="flex flex-col md:flex-row h-screen bg-gray-950 text-white overflow-hidden">
            <nav className="hidden md:flex flex-col p-4 border-r border-gray-800">
              <Sidebar />
            </nav>
            <main className="flex-1 overflow-y-auto p-6 pb-20 md:pb-6">
              {children}
            </main>
            <BottomNav />
          </section>
        </DashboardProvider>
    )
  }