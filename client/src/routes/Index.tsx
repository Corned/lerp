import { Github } from "lucide-react"
import exampleImage from "../assets/example.png"





const Header = () => {
  return (
    <div className="select-none overflow-hidden relative bg-indigo-400 p-20 text-white rounded-xl flex flex-col items-start gap-4">
      <p className="text-7xl font-rubik-mono z-20">Lerp</p>
      <p className="text-7xl font-rubik-mono z-20">Task</p>
      <p className="text-7xl font-rubik-mono z-20">Manager</p>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400 from-45% to-indigo-400/10 z-10 ">

      </div>

      <img className="absolute right-0 top-0 w-3/5 min-h-full max-w-1/2 object-cover"
      src={exampleImage} />
    </div>
  )
}

const Features = () => {
  return (
    <div className="grid grid-cols-3 h-60 gap-10">
      <div className="bg-gray-200 rounded-xl"></div>
      <div className="bg-gray-200 rounded-xl"></div>
      <div className="bg-gray-200 rounded-xl"></div>
    </div>
  )
}


const Index = () => {
  return (
    <div className="mt-20 w-[1200px] mx-auto flex flex-col gap-10">
      <Header />

      <blockquote cite="https://github.com/corned/" className="flex flex-col items-center gap-1 my-10">
        <p className="font-rubik text-2xl">Wowwee! Lerp has improved my productivity by <i>at least</i> 100%!</p>
        <footer className="text-xl">—Me, <cite>Lead Developer of Lerp</cite></footer>
      </blockquote>

      <Features />

      <footer className="select-none mt-auto flex flex-col gap-1 p-5 items-center text-gray-300">
      <div className="flex flex-row gap-4 mb-1 hover:text-black">
          <a href="https://github.com/corned/lerp">
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
          <p>TailwindCSS</p>
          <p>Lucide Icons</p>
          <p>shadcn/ui</p>
        </div>


      </footer>
    </div>
  )
}

export default Index
