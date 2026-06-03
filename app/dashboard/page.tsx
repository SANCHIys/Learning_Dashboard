import { createClient } from "@/lib/supabase/server";
import { Courses } from "@/lib/types";
import CourseCard from "@/components/CourseCard"
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import BentoGrid from "@/components/BentoGrid";

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('Courses')
    .select()
  console.log(data, error)
    return (
      <BentoGrid>
        {<section className="col-span-2">
          <HeroTile 
            Name="Sanchi Sharma"
            streak={5}
            />
          </section>
        }
        {<section className="col-span-1">
            <ActivityTile/>
          </section>
        }
        <section className="col-span-3 grid grid-cols-2 gap-4">
          {data?.map((course) => (
            <section key={course.id}>
              <CourseCard
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            </section>
          ))}
        </section>
      </BentoGrid>
    )
  }