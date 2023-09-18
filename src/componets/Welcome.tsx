import styles from './Welcome.module.css'
import { ArrowDownIcon, CodeIcon, NextIcon, ReactIcon, TypescriptIcon } from '../assets/icons/icons'
import { useEffect, useState } from 'react'

export function Welcome() {
  
  // Muestra el mensaje de Scroll Down! después de 4s
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 4000);
  }, [])

  // Array de Skills
  const skills = [
    {
      name: "React",
      icon: <ReactIcon classList="h-8 w-8" />,
      color: "text-cyan-800",
      bg: "bg-cyan-400",
      experience: 1
    },
    {
      name: "Next.js",
      icon: <NextIcon classList="h-8 w-8" />,
      color: "text-white",
      bg: "bg-black",
      experience: 0.5
    },
    {
      name: "Typescript",
      icon: <TypescriptIcon classList="h-8 w-8" />,
      color: "text-blue-900",
      bg: "bg-blue-400",
      experience: 0.5
    },
    {
      name: "And More",
      icon: <CodeIcon classList="h-8 w-8" />,
      color: "text-amber-900",
      bg: "bg-amber-400",
      experience: 1
    }
  ]

  return (
    <section className="flex flex-col h-screen items-center justify-center snap-center relative">
      <img
        className={`w-3/5 sm:w-60 max-w-[15rem] my-3 mx-auto object-contain border-4 border-black pt-1 ${styles.img}`}
        src="./src/assets/img/profile.png"
        alt="Profile"
      />
      <h1 className="text-4xl font-black text-center">
        Josué Ferreyra
      </h1>
      <h2 className={`text-xl font-semibold text-transparent ${styles.img} bg-clip-text`}>
        Frontend Developer
      </h2>
      <div className="flex justify-center gap-5 flex-wrap px-3 mt-5">
        {
          skills.map(skill => (
            <div key={skill.name} className={`flex flex-col items-center p-2 rounded-lg ${skill.color} ${skill.bg} w-24`}>
              {skill.icon}
              <h3 className="text-sm font-semibold">{skill.name}</h3>
            </div>
          ))
        }
      </div>
      <div className={`flex flex-col ${isReady ? 'h-10 transition-all' : 'h-0'} overflow-hidden items-center absolute mb-1 bottom-0 animate-bounce bg-white w-full`}>
        <p className='text-sm font-light'>Scroll Down!</p>
        <ArrowDownIcon classList={"scale-110"} />
      </div>      
    </section>
  )
}