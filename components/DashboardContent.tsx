"use client";
import { useDashboard } from "@/lib/DashboardContext";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import HeroTile from "./HeroTile";
import BentoGrid from "./BentoGrid";
interface DashboardContentProps {
    data: {
      id: string
      title: string
      progress: number
      icon_name: string
    }[]
  }
  
  export default function DashboardContent({ data }: DashboardContentProps) {
    const { activeItem } = useDashboard()
    
    return (
        <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {(activeItem === '' || activeItem === 'home' || activeItem === 'profile' || activeItem === 'settings') && (
                <section className="col-span-1 lg:col-span-2">
                    <HeroTile Name="Sanchi Sharma" streak={5} />
                </section>
            )}
            {activeItem === 'courses' && (
            <section className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.map((course) => (
                <section key={course.id}>
                    <CourseCard title={course.title} progress={course.progress} icon_name={course.icon_name} />
                </section>
                ))}
            </section>
            )}

            {(activeItem === '' || activeItem === 'home' || activeItem === 'courses') && (
            <section className="col-span-1">
                <ActivityTile />
            </section>
            )}

            {(activeItem === '' || activeItem === 'home') && (
            <section className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.map((course) => (
                <section key={course.id}>
                    <CourseCard title={course.title} progress={course.progress} icon_name={course.icon_name} />
                </section>
                ))}
            </section>
            )}
        </BentoGrid>
      )
  }