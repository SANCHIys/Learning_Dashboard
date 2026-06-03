## What was built :
- Build a Dashboard prototype that fetches the live data from Supabase and renders a personalised Dashboard. 
- With the use of animations made the whole dashboard more then just flashy visuals.

## Tech Stack :
● Framework: Next.js.
● Database/BaaS: Supabase.
● Styling: Tailwind CSS.
● Animations: Framer Motion.
● Icons: Lucide React or Radix Icons.

## Architecture :
- the page.tsx is the server component as it renders the data from the Supabase and displays the live data.
- `Sidebar.tsx`, `CourseCard.tsx`, `HeroTile.tsx` and the `ActivityTile.tsx` are all Client components used for making the content and the animation more seamless.
- for the Mobile layout we have have created a `BottomNav.tsx` which makes it Responsive. 

## Running Locally

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
4. Run `npm run dev`
5. Open http://localhost:3000