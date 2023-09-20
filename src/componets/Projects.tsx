import { projects } from '../data.json'
import { techs } from '../utils/techs'

export function Projects() {
  return (
    <section className="snap-start">
      <div className="max-w-4xl m-auto px-3">
        <div className="w-fit">
          <h2 className='text-5xl font-black pt-3'>
            Projects
          </h2>
          <div className="h-3 w-full bg-green-500 -mt-3"></div>
        </div>        

        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {
            projects
            .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
            .map(project => (
              <article key={project.id} className="rounded overflow-hidden relative flex flex-col">
            
                <h4 className={`absolute font-bold right-0 my-2 mx-3 px-2 py-1 rounded ${project.isProfessional ? "bg-yellow-500 text-black" : "bg-cyan-500 text-black"} text-sm`}>
                  {project.isProfessional ? "Professional" : "Personal"}
                </h4>

                <picture>
                  <source type="image/webp" srcSet={`${project.imgUrl}.webp`} />
                  <img className='w-full object-cover' src={`${project.imgUrl}.png`} alt={project.name} />
                </picture>

                <h3 className='text-2xl font-black p-3 bg-zinc-950'>
                  {project.name}                  
                </h3>

                <div className="bg-zinc-800 flex flex-col gap-4 p-3 h-full">
                  <p>{project.description}</p>

                  <div className="flex justify-start gap-2">
                    {
                      techs
                      .filter(tech => project.techs.indexOf(tech.name.toLocaleLowerCase()) !== -1)
                      .map(tech => (
                        <div key={tech.name} className={`p-1 rounded ${tech.color} ${tech.bg}`}>
                          {tech.icon({classList: "h-5 w-5"})}
                        </div>
                      ))
                    }
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex gap-3 text-center mb-3">
                      <a className='flex-1 px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition-colors' href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                        Deploy
                      </a>
                      {
                        project.repoUrl
                        ? (
                          <a className='flex-1 px-4 py-2 bg-zinc-900 hover:bg-zinc-950 transition-colors rounded' href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        )
                        : <></>
                      }
                    </div>

                    <p className='text-xs font-normal text-end text-slate-300'>
                      {new Date(project.startDate).toLocaleDateString('en-US', { month: "long", year:"numeric"})} - {new Date(project.endDate).toLocaleDateString('en-US', { month: "long", year:"numeric"})}
                    </p>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}