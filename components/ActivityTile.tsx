"use client"
export default function ActivityTile(){
    const activityData = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0];    return(
        <section className="grid grid-cols-10 gap-1 bg-gray-800 rounded-xl p-5 border border-gray-700">            
            <h3 className="col-span-10">Month Activity!</h3>
            {activityData.map((daysActive, index) => (
                <div 
                key={index} 
                className={`w-6 h-6 rounded-md ${daysActive === 1 ? 'bg-indigo-500' : 'bg-gray-700'}`}
            />
            ))}
        </section>
    )
}