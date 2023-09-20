import { techs as skills } from '../utils/techs'

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
            skills.slice(0,8).map(skill => (
              <div key={skill.name} className={`flex flex-col items-center p-2 rounded-lg ${skill.color} ${skill.bg}`}>
                {skill.icon({classList: "h-8 w-8"})}
                <h3 className="text-sm font-semibold capitalize">{skill.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}