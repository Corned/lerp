import { Github } from "lucide-react"
import exampleImage from "../assets/example.png"

const Header = () => {
  return (
    <header className="relative flex select-none flex-col items-start gap-4 overflow-hidden rounded-xl bg-indigo-400 p-20 text-white">
      <p className="z-20 font-rubik-mono text-7xl">Lerp</p>
      <p className="z-20 font-rubik-mono text-7xl">Task</p>
      <p className="z-20 font-rubik-mono text-7xl">Manager</p>

      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-indigo-400 from-45% to-indigo-400/10 "></div>

      <img
        className="max-w-1/2 absolute right-0 top-0 min-h-full w-3/5 object-cover"
        src={exampleImage}
      />
    </header>
  )
}

const Features = () => {
  return (
    <article className="grid h-60 grid-cols-3 gap-10">
      <div className="rounded-xl bg-gray-200"></div>
      <div className="rounded-xl bg-gray-200"></div>
      <div className="rounded-xl bg-gray-200"></div>
    </article>
  )
}

const Index = () => {
  return (
    <main className="mx-auto mt-20 flex w-[1200px] flex-col gap-10">
      <Header />

      <blockquote
        cite="https://github.com/corned/"
        className="my-10 flex flex-col items-center gap-1"
      >
        <p className="font-rubik text-2xl font-bold">
          Wowwee! Lerp has improved my productivity by <i>at least</i> 100%!
        </p>
        <footer className="text-xl">
          —Me, <cite>Lead Developer of Lerp</cite>
        </footer>
      </blockquote>

      <Features />

      <footer className="mt-auto flex select-none flex-col items-center gap-1 p-5 text-gray-300/80">
        <div className="mb-1 flex flex-row gap-4 text-gray-400 hover:text-black">
          <a
            href="https://github.com/corned/lerp"
            className="transition-all hover:pb-1"
          >
            <Github />
          </a>
        </div>

        <div className="flex flex-row gap-4">
          <p>Node.js</p>
          <p>Express</p>
          <p>MongoDB</p>
        </div>

        <div className="flex flex-row gap-4">
          <p>Vite</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>Redux Toolkit</p>
          <p>RTK Query</p>
          <p>TailwindCSS</p>
          <p>Lucide Icons</p>
          <p>shadcn/ui</p>
        </div>
      </footer>
    </main>
  )
}

export default Index
