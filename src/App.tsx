import { AboutMe } from "./componets/AboutMe"
import { Projects } from "./componets/Projects"
import { Skills } from "./componets/Skills"
import { Welcome } from "./componets/Welcome"

function App() {
  return (
    <main className="overflow-y-scroll snap-y snap-proximity h-screen">
      <Welcome />
      <div className="min-h-screen bg-zinc-900 text-white flex flex-col gap-10 pt-4 pb-8">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
      <footer className="h-16 flex items-center justify-center text-white text-sm font-semibold bg-zinc-950">
        By Josué Ferreyra
      </footer>
    </main>
  )
}

export default App
