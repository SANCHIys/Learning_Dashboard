import { redirect } from 'next/navigation'
 
export default async function Page() {
  redirect(`/dashboard`) // Navigate to the new post page
}