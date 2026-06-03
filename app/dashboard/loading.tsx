'use client'

export default function Loading() {
    return (
      <div className="grid grid-cols-3 gap-4 p-6">
        <section className="col-span-2 h-32 bg-gray-800 rounded-xl animate-pulse" />
        <aside className="col-span-1 h-32 bg-gray-800 rounded-xl animate-pulse" />
        <section className="col-span-3 grid grid-cols-2 gap-4">
          <div className="h-24 bg-gray-800 rounded-xl animate-pulse" />
          <div className="h-24 bg-gray-800 rounded-xl animate-pulse" />
          <div className="h-24 bg-gray-800 rounded-xl animate-pulse" />
          <div className="h-24 bg-gray-800 rounded-xl animate-pulse" />
        </section>
      </div>
    )
  }