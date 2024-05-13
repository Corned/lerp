import { ChevronDown, Home } from "lucide-react"
import ProfilePicture from "./components/ProfilePicture"
import Workspace from "./components/Workspace"

const App = () => {
  return (
    <div className="App grid h-full grid-rows-[70px_1fr]">
      <nav className="flex flex-row items-center justify-between border-b py-3 pl-10 pr-3">
        <h1 className="text-2xl font-bold">LERP</h1>

        <div className="logo">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
        </div>

        <div className="ml-10 mr-auto flex flex-row gap-2">
          <button className="flex flex-row items-center justify-center gap-2 rounded-md px-3 py-2 text-xl font-bold hover:bg-black/10 ">
            <span>Home</span>
            <Home size={18} />
          </button>
          <button className="flex flex-row items-center justify-center gap-2 rounded-md px-3 py-2 text-xl font-bold hover:bg-black/10 ">
            <span>My Workspaces</span>
            <ChevronDown size={18} />
          </button>
        </div>

        <ProfilePicture />
      </nav>
      <Workspace />
    </div>
  )
}

export default App
