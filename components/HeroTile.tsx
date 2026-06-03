"use client"
import {Flame} from 'lucide-react';
import {motion} from 'framer-motion';
interface HeroTileProps {
    Name: string;
    streak: number;
}

export default function HeroTile({Name, streak}: HeroTileProps){
    const letters = Name.split("")
    return (
        <article className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700">
          <h1 className="text-4xl font-bold">
            Welcome Back!{" "}
            <motion.span>
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: streak }).map((_, i) => (
              <Flame key={i} className="text-orange-500" size={27} />
            ))}
            <span className="ml-2">{streak} days streak</span>
          </div>
        </article>
    )
}
