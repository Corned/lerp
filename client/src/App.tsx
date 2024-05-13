import { ChevronDown, Home } from "lucide-react"
import ProfilePicture from "./components/ProfilePicture"
import Workspace from "./components/Workspace"

const MiniChevronDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const App = () => {
  return (
    <div className="App grid h-full grid-rows-[70px_1fr]">
      <nav className="flex flex-row items-center justify-between border-b py-3 pl-10 pr-3">
        <h1 className="text-2xl font-bold">LERP</h1>

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
