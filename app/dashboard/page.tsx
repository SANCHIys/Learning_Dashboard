import { createClient } from "@/lib/supabase/server";
import DashboardContent from "@/components/DashboardContent";

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('Courses')
    .select()
  console.log(data, error)
  return <DashboardContent data={data ?? []} />
}