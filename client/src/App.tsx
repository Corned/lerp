/* import { Slider } from "@/components/ui/slider" */
import { useState } from "react"
import { Switch } from "./components/ui/switch"
import { Checkbox } from "./components/ui/checkbox"
import { Slider } from "./components/ui/slider"
import { Button } from "./components/ui/button"

function App() {
  const [password, setPassword] = useState("PTx1f5DaFX")
  const [passwordLength, setPasswordLength] = useState(8)

  return (
    <div className="container-sm mx-auto flex max-w-fit flex-col gap-2 font-mono text-white">
      <div className="flex flex-row items-center justify-between rounded-md bg-slate-800 p-3">
        <p className="text-2xl">{password}</p>
        <p>copy</p>
      </div>

      <div className="flex flex-col gap-2 rounded-md bg-slate-800 p-3">
        <div className="flex flex-row items-center justify-between">
          <p className="">Character Length</p>
          <p className="text-3xl text-green-400">{passwordLength}</p>
        </div>

        <Slider
          className="bg-transparent"
          onChange={(event) => console.log(event.target)}
          defaultValue={[12]}
          min={8}
          max={32}
          onValueChange={(i) => setPasswordLength(i[0])}
        />

        <label className="select-none capitalize">
          <Checkbox className="mr-1.5 rounded-none outline outline-2 outline-green-400" />
          Include uppercase letters
        </label>

        <label className="select-none capitalize">
          <Checkbox className="mr-1.5 rounded-none outline outline-2 outline-green-400" />
          Include lowercase letters
        </label>

        <label className="select-none capitalize">
          <Checkbox className="mr-1.5 rounded-none outline outline-2 outline-green-400" />
          Include numbers
        </label>

        <label className="select-none capitalize">
          <Checkbox className="mr-1.5 rounded-none outline outline-2 outline-green-400" />
          Include symbols
        </label>

        <Button className="bg-green-400 hover:bg-green-500">Generate</Button>
      </div>
    </div>
  )
}

export default App
