import ProfilePicture from "./components/ProfilePicture"
import Workspace from "./components/Workspace"

function App() {
  return (
    <div className="App grid h-full grid-rows-[60px_1fr]">
      <nav className="flex flex-row items-center justify-between border-b py-2 pl-10 pr-2">
        <h1 className="text-xl font-bold">LERP</h1>
        <ProfilePicture />
      </nav>
      <Workspace />
    </div>
  )
}

export default App
