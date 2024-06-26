import { Github } from "lucide-react"
import exampleImage from "@/assets/example.png"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="relative flex select-none flex-row justify-between gap-4 overflow-hidden rounded-xl p-20 text-white bg-indigo-400 ">

      <p className="text-7xl font-rubik font-bold w-3/4 flex flex-col gap-1">
        <span>Achieve <span className="italic">more</span></span>
        <span> with unparalleled </span>
        <span><span className="font-serif uppercase">efficiency</span>.</span>
      </p>

{/* 
      <div className="flex flex-col justify-center w-full items-left gap-4">
        <p className="font-rubik-mono text-7xl drop-shadow-md">Lerp</p>
        <p className="font-rubik-mono text-7xl drop-shadow-md">Task</p>
        <p className="font-rubik-mono text-7xl drop-shadow-md">Manager</p>
      </div>
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-to-r from-indigo-400 from-45% to-indigo-400/40 "></div>

      <img
        className="max-w-1/2 absolute right-0 top-0 z-[-2] min-h-full w-3/5 object-cover"
        src={exampleImage}
      />
 */}


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
    <main className="mx-auto mt-10 flex w-[1200px] flex-col gap-10">
      <Header />

      <blockquote
        cite="https://github.com/corned/"
        className="mb-5 mt-10 flex flex-col items-center gap-1"
      >
        <p className="font-rubik text-2xl font-bold">
          Wowwee! Lerp has improved my productivity by <i>at least</i> 100%!
        </p>
        <footer className="text-xl">
          —Me, <cite>Lead Developer of Lerp</cite>
        </footer>
      </blockquote>

      <div className="flex flex-row justify-center gap-4">
        <Button variant="outline" className="px-8 py-6 text-2xl">
          Sign up!
        </Button>
        <Button variant="outline" className="px-8 py-6 text-2xl">
          Log in
        </Button>
      </div>

      <Features />

      <footer className="mt-auto flex select-none flex-col items-center gap-1 p-5 text-gray-300/80">
        <div className="mb-1 flex flex-row gap-4 text-gray-400 hover:text-black">
          <a
            href="https://github.com/corned/lerp"
            className="transition-all hover:pb-1"
            target="_blank"
            referrerPolicy="no-referrer"
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
