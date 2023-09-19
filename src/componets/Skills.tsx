import { techs as skills } from '../data.json'
import { iconsMap } from '../assets/icons/iconsMap'

/*
  Pequeño "FIX" para que los colores de las skills puedan añadirse de forma dinámica debido a que Tailwind NO se ejecuta en el cliente, al hacer el fetch de las propiedades "bg" y "color" se añaden a la clase, pero al no haber sido previamente mencionadas en el código, Tailwind no tiene sus valores cargados. Es por eso que en un comentario cargamos todos los colores que vamos a usar desde DATA.json

  De todas formas es una solución bastante pobre y no me gusta, pero no he visto otra forma de hacerlo, ya que, sino habría que poner el DATA.json como un objeto dentro del componente, cosa que quiero evitar. En un futuro tal vez encuentro una solución más elegante. Por ahora esto es lo que funciona.

  "color": "text-cyan-800"
  "bg": "bg-cyan-400"
  "color": "text-white"
  "bg": "bg-black"
  "color": "text-blue-900"
  "bg": "bg-blue-400"
  "color": "text-orange-900"
  "bg": "bg-orange-400"
  "color": "text-sky-900"
  "bg": "bg-sky-400"
  "color": "text-violet-900"
  "bg": "bg-violet-400"
  "color": "text-teal-900"
  "bg": "bg-teal-400"
*/ 

export function Skills() {
  return (
    <section id="skills" className="snap-start">
      <div className="max-w-4xl m-auto px-3">
        <div className="w-fit">
          <h2 className='text-5xl font-black pt-3'>
            Skills
          </h2>
          <div className="h-3 w-full bg-amber-500 -mt-3"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-3 mt-6">
          {
            skills.map(skill => (
              <div key={skill.name} className={`flex flex-col items-center p-2 rounded-lg ${skill.color} ${skill.bg}`}>
                {iconsMap[skill.name as keyof typeof iconsMap]({classList: "h-8 w-8"})}
                <h3 className="text-sm font-semibold capitalize">{skill.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}